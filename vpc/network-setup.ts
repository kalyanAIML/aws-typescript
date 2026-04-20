
```ts id="x4p2dv"
// vpc/network-setup.ts

import {
  EC2Client,
  CreateVpcCommand,
  CreateSubnetCommand,
  CreateInternetGatewayCommand,
  AttachInternetGatewayCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function setupNetwork() {
  const vpc = await ec2.send(
    new CreateVpcCommand({
      CidrBlock: "10.0.0.0/16"
    })
  );

  const vpcId = vpc.Vpc?.VpcId;
  console.log("VPC:", vpcId);

  const subnet = await ec2.send(
    new CreateSubnetCommand({
      VpcId: vpcId,
      CidrBlock: "10.0.1.0/24"
    })
  );

  console.log("Subnet:", subnet.Subnet?.SubnetId);

  const igw = await ec2.send(
    new CreateInternetGatewayCommand({})
  );

  await ec2.send(
    new AttachInternetGatewayCommand({
      InternetGatewayId: igw.InternetGateway?.InternetGatewayId,
      VpcId: vpcId
    })
  );

  console.log("Internet Gateway Attached");
}

setupNetwork().catch(console.error);
