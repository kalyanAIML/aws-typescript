// ec2/instance-types.ts

import {
  EC2Client,
  DescribeInstanceTypesCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function describeInstanceTypes() {
  const response = await ec2.send(
    new DescribeInstanceTypesCommand({
      InstanceTypes: ["t3.micro", "m5.large"]
    })
  );

  console.log(JSON.stringify(response.InstanceTypes, null, 2));
}

describeInstanceTypes().catch(console.error);
