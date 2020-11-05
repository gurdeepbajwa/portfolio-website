# My Portfolio Website (2020)

### [Link to GurdeepBajwa.com](https://gurdeepbajwa.com/)

### About this project

<p>
I created this project while working on the #CloudResumeChallenge. 
The page is stored within S3 as a static website, this page is then being send to a edge locations through CloudFront where is is able to be viewed securely. Route53 points the GurdeepBajwa.com domain name at the CloudFront distribution. 

The website contains a form that allows for users to send messages, this form uses JavaScript for validation and then sends the inputs to an API created by API Gateway. API Gateway is being pointed to a Lambda function which takes the inputs and stores them into a DynamoDB table. The entire process is serverless and very cheap to run. 

</p>

### Tools and technologies Used:

- AWS
  - DynamoDB
  - Lambda
  - API Gateway
  - S3
  - Route53
  - CloudFront
- Programming Languages
  - JavaScript
  - Node JS
  - HTML
  - CSS
  - Bootstrap
  - JQuery
- Others
  - REST API
  - Regular Expressions (RegEx)
  - CORS
  - Serverless Architecture

### How do I view it? 
<p>Simply give the link a click, or copy it into your URL</p>

 [https://gurdeepbajwa.com/](https://gurdeepbajwa.com/)