// vpc/nat-gateway.ts

import {
  EC2Client,
  CreateNatGatewayCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createNatGateway() {
  const response = await ec2.send(
    new CreateNatGatewayCommand({
      AllocationId: "eipalloc-1234567890abcdef0",
      SubnetId: "subnet-1234567890abcdef0"
    })
  );

  console.log(
    "NAT Gateway Created:",
    response.NatGateway?.NatGatewayId
  );
}

createNatGateway().catch(console.error);
