import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const sns = new SNSClient({ region: "us-east-1" });

async function sendNotification() {
  const command = new PublishCommand({
    TopicArn: "arn:aws:sns:us-east-1:123456789012:alerts",
    Message: "Server CPU usage is above 80%",
    Subject: "AWS Alert"
  });

  const result = await sns.send(command);
  console.log(result);
}

sendNotification();
