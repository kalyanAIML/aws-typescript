// cloudwatch/get-metrics.ts

import {
  CloudWatchClient,
  GetMetricStatisticsCommand
} from "@aws-sdk/client-cloudwatch";

const cloudwatch = new CloudWatchClient({ region: "us-east-1" });

async function getMetrics() {
  const response = await cloudwatch.send(
    new GetMetricStatisticsCommand({
      Namespace: "AWS/EC2",
      MetricName: "CPUUtilization",
      Dimensions: [
        {
          Name: "InstanceId",
          Value: "i-1234567890abcdef0"
        }
      ],
      StartTime: new Date(Date.now() - 3600 * 1000),
      EndTime: new Date(),
      Period: 300,
      Statistics: ["Average"]
    })
  );

  console.log(response.Datapoints);
}

getMetrics().catch(console.error);
