# Remaining manual steps:
# * Route53 Hosted Zone creation

provider "aws" {
  region  = "us-east-1"
  alias   = "main"
}

variable site_hostname {
  type    = string
  default = "halcyon.city"
}

variable "site_namespace" {
  type    = string
  default = "halcyon-city"
}

variable "site_stage" {
  type = string
  default = "prod"
}

module "terraform_state_backend" {
  source        = "git::https://github.com/cloudposse/terraform-aws-tfstate-backend.git?ref=tags/0.9.0"
  namespace     = var.site_namespace
  stage         = var.site_stage
  name          = "terraform"
  attributes    = ["state"]
  region        = "us-east-1"
}

module "acm_request_certificate" {
  source                            = "git::https://github.com/cloudposse/terraform-aws-acm-request-certificate.git?ref=tags/0.4.0"
  domain_name                       = var.site_hostname
  process_domain_validation_options = true
  wait_for_certificate_issued       = true
  ttl                               = "300"
  subject_alternative_names         = ["*.${var.site_hostname}"]
  zone_name                         = var.site_hostname
}

module "site" {
  source = "github.com/riboseinc/terraform-aws-s3-cloudfront-website"
  fqdn = var.site_hostname
  ssl_certificate_arn = module.acm_request_certificate.id
  allowed_ips = ["0.0.0.0/0"]
  index_document = "index.html"
  error_document = "404.html"
  refer_secret = base64sha512("REFER-SECRET-19265125-${var.site_hostname}-52865926")
  force_destroy = "true"
  providers = {
    aws.main = aws.main
    aws.cloudfront = aws.main
  }
}

module "dns" {
  source           = "git::https://github.com/cloudposse/terraform-aws-route53-alias.git?ref=tags/0.5.0"
  aliases          = [var.site_hostname, "www.${var.site_hostname}"]
  parent_zone_name = var.site_hostname
  target_dns_name  = module.site.cf_domain_name
  target_zone_id   = module.site.cf_hosted_zone_id
}

resource "aws_s3_bucket_object" "object" {
  bucket = module.site.s3_bucket_id
  key    = "index.html"
  source = "index.html"
  etag = filemd5("index.html")
}

# https://github.com/cloudposse/terraform-aws-iam-system-user