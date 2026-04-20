// vpc/route-table.ts

import {
  EC2Client,
  CreateRouteTableCommand,
  CreateRouteCommand,
  AssociateRouteTableCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createRouteTable() {
  const routeTable = await ec2.send(
    new CreateRouteTableCommand({
      VpcId: "vpc-1234567890abcdef0"
    })
  );

  const routeTableId = routeTable.RouteTable?.RouteTableId;

  console.log("Route Table:", routeTableId);

  await ec2.send(
    new CreateRouteCommand({
      RouteTableId: routeTableId,
      DestinationCidrBlock: "0.0.0.0/0",
      GatewayId: "igw-1234567890abcdef0"
    })
  );

  await ec2.send(
    new AssociateRouteTableCommand({
      RouteTableId: routeTableId,
      SubnetId: "subnet-1234567890abcdef0"
    })
  );

  console.log("Route Table Associated");
}

createRouteTable().catch(console.error);
