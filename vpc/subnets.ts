// vpc/subnets.ts

import { EC2Client, CreateSubnetCommand } from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createSubnets() {
  const publicSubnet = await ec2.send(
    new CreateSubnetCommand({
      VpcId: "vpc-1234567890abcdef0",
      CidrBlock: "10.0.1.0/24",
      AvailabilityZone: "us-east-1a"
    })
  );

  console.log("Public Subnet:", publicSubnet.Subnet?.SubnetId);

  const privateSubnet = await ec2.send(
    new CreateSubnetCommand({
      VpcId: "vpc-1234567890abcdef0",
      CidrBlock: "10.0.2.0/24",
      AvailabilityZone: "us-east-1b"
    })
  );

  console.log("Private Subnet:", privateSubnet.Subnet?.SubnetId);
}

createSubnets().catch(console.error);
