#!/bin/bash

# If you're starting with no resources at all, delete override.tf before running this script

terraform init
if [ ! -f override.tf ]; then
  terraform apply -auto-approve -target module.terraform_state_backend
  export DYNAMODB_TABLE_NAME=$(terraform output -json | jq -r '.dynamodb_table_name.value')
  export S3_BUCKET_ID=$(terraform output -json | jq -r '.s3_bucket_id.value')
  envsubst < override.tf.in > override.tf
  terraform init -force-copy
fi
terraform apply -auto-approve
