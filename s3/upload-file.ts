async function uploadFile() {
  try {
    const command = new PutObjectCommand({
      Bucket: "your-demo-bucket",
      Key: "reports/sample.txt",
      Body: "Hello from AWS and TypeScript"
    });

    const result = await s3.send(command);
    console.log("Upload Success:", result);
  } catch (error) {
    console.error("Upload Failed:", error);
  }
}

uploadFile();
