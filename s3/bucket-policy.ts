// s3/bucket-policy.ts

import { S3Client, PutBucketPolicyCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: "us-east-1" });

async function applyBucketPolicy() {
  const policy = {
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "PublicRead",
        Effect: "Allow",
        Principal: "*",
        Action: ["s3:GetObject"],
        Resource: ["arn:aws:s3:::my-demo-bucket-12345/*"]
      }
    ]
  };

  const response = await s3.send(
    new PutBucketPolicyCommand({
      Bucket: "my-demo-bucket-12345",
      Policy: JSON.stringify(policy)
    })
  );

  console.log("Bucket Policy Applied:", response);
}

applyBucketPolicy().catch(console.error);
