// s3/upload-file.ts

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: "us-east-1" });

async function uploadFile() {
  const response = await s3.send(
    new PutObjectCommand({
      Bucket: "my-demo-bucket-12345",
      Key: "documents/sample.txt",
      Body: "Hello from AWS S3"
    })
  );

  console.log("File Uploaded:", response);
}

uploadFile().catch(console.error);
