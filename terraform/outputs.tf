output "dynamodb_table_name" {
    value = module.terraform_state_backend.dynamodb_table_name
}

output "s3_bucket_id" {
    value = module.terraform_state_backend.s3_bucket_id
}

output "site_bucket_id" {
    value = module.site.s3_bucket_id
}