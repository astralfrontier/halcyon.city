"use strict";

const fs = require('fs');

const credentials = {
  "type": "service_account",
  "project_id": "halcyon-city",
  "private_key_id": process.env.GOOGLE_PRIVATE_KEY_ID,
  "private_key": process.env.GOOGLE_PRIVATE_KEY,
  "client_email": "halcyon-city@halcyon-city.iam.gserviceaccount.com",
  "client_id": process.env.GOOGLE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/halcyon-city%40halcyon-city.iam.gserviceaccount.com"
}

fs.writeFileSync("credentials.json", JSON.stringify(credentials));