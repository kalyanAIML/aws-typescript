// ec2/elastic-ip.ts

import {
  EC2Client,
  AllocateAddressCommand,
  AssociateAddressCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createElasticIP() {
  const allocateResponse = await ec2.send(
    new AllocateAddressCommand({
      Domain: "vpc"
    })
  );

  console.log("Elastic IP Allocated:", allocateResponse.PublicIp);

  await ec2.send(
    new AssociateAddressCommand({
      AllocationId: allocateResponse.AllocationId,
      InstanceId: "i-1234567890abcdef0"
    })
  );

  console.log("Elastic IP Associated to EC2 Instance");
}

createElasticIP().catch(console.error);
