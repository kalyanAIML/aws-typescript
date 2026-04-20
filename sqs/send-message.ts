import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqs = new SQSClient({ region: "us-east-1" });

async function sendMessage() {
  const command = new SendMessageCommand({
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/123456789012/orders",
    MessageBody: JSON.stringify({
      orderId: 1001,
      customer: "Kalyan"
    })
  });

  const response = await sqs.send(command);
  console.log(response);
}

sendMessage();
