//ec2/create-vpc.ts

import {
  EC2Client,
  CreateVpcCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createVpc() {
  const response = await ec2.send(
    new CreateVpcCommand({
      CidrBlock: "10.0.0.0/16"
    })
  );

  console.log("VPC Created:", response.Vpc?.VpcId);
}

createVpc().catch(console.error);
