// s3/create-bucket.ts

import { S3Client, CreateBucketCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: "us-east-1" });

async function createBucket() {
  const response = await s3.send(
    new CreateBucketCommand({
      Bucket: "my-demo-bucket-12345"
    })
  );

  console.log("Bucket Created:", response.Location);
}

createBucket().catch(console.error);
