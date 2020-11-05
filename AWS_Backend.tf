# Version 1 
# Attempting to create IAC terraform file

terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      region = "us-east-1"
      access_key = "my-access-key"
      secret_key = "my-secret-key"
    }
  }
}

resource "aws_s3_bucket" "gb_s3" {
  bucket = "gurdeepbajwa.com"
  acl    = "public-read"
  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::gurdeepbajwa.com/*"
        },
        {
            "Sid": "2",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E3CT2JV5I8C4LN"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::gurdeepbajwa.com/*"
        }
    ]
POLICY

  website {
    index_document = "index.html"
  }
}

resource "aws_dynamodb_table" "job-queries-DB" {
  name           = "job-queries"
  billing_mode   = "PROVISIONED"
  read_capacity  = 1
  write_capacity = 2
  hash_key       = "email"

  attribute {
    name = "email"
    type = "S"
  }

  ttl {
    attribute_name = "TimeToExist"
    enabled        = false
  }

  tags = {
    Name        = "job-queries"
    Environment = "production"
  }
}

