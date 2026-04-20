import {
  CloudWatchLogsClient,
  PutLogEventsCommand
} from "@aws-sdk/client-cloudwatch-logs";

const logs = new CloudWatchLogsClient({ region: "us-east-1" });

async function writeLog() {
  const command = new PutLogEventsCommand({
    logGroupName: "application-logs",
    logStreamName: "server-1",
    logEvents: [
      {
        message: "Application Started Successfully",
        timestamp: Date.now()
      }
    ]
  });

  const response = await logs.send(command);
  console.log(response);
}

writeLog();
