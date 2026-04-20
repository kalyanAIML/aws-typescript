// security-groups/create-security-group.ts

import {
  EC2Client,
  CreateSecurityGroupCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createSecurityGroup() {
  const response = await ec2.send(
    new CreateSecurityGroupCommand({
      GroupName: "WebServerSG",
      Description: "Security group for web server",
      VpcId: "vpc-1234567890abcdef0"
    })
  );

  console.log("Security Group Created:", response.GroupId);
}

createSecurityGroup().catch(console.error);
