
import {
  EC2Client,
  CreateNetworkInterfaceCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createNetworkInterface() {
  const response = await ec2.send(
    new CreateNetworkInterfaceCommand({
      SubnetId: "subnet-1234567890abcdef0",
      Description: "Application Network Interface",
      Groups: ["sg-1234567890abcdef0"],
      PrivateIpAddress: "10.0.1.50"
    })
  );

  console.log("ENI Created:", response.NetworkInterface?.NetworkInterfaceId);
}

createNetworkInterface().catch(console.error);
