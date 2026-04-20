// vpc/internet-gateway.ts

import {
  EC2Client,
  CreateInternetGatewayCommand,
  AttachInternetGatewayCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createInternetGateway() {
  const response = await ec2.send(
    new CreateInternetGatewayCommand({})
  );

  const gatewayId = response.InternetGateway?.InternetGatewayId;

  console.log("Internet Gateway Created:", gatewayId);

  await ec2.send(
    new AttachInternetGatewayCommand({
      InternetGatewayId: gatewayId,
      VpcId: "vpc-1234567890abcdef0"
    })
  );

  console.log("Internet Gateway Attached to VPC");
}

createInternetGateway().catch(console.error);
