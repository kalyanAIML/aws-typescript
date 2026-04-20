// cloudwatch/create-alarm.ts

import {
  CloudWatchClient,
  PutMetricAlarmCommand
} from "@aws-sdk/client-cloudwatch";

const cloudwatch = new CloudWatchClient({ region: "us-east-1" });

async function createAlarm() {
  const response = await cloudwatch.send(
    new PutMetricAlarmCommand({
      AlarmName: "HighCPUAlarm",
      Namespace: "AWS/EC2",
      MetricName: "CPUUtilization",
      Dimensions: [
        {
          Name: "InstanceId",
          Value: "i-1234567890abcdef0"
        }
      ],
      Statistic: "Average",
      Period: 300,
      EvaluationPeriods: 1,
      Threshold: 80,
      ComparisonOperator: "GreaterThanThreshold"
    })
  );

  console.log(response);
}

createAlarm().catch(console.error);
