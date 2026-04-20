// ebs/create-volume.ts

import { EC2Client, CreateVolumeCommand } from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createVolume() {
  const response = await ec2.send(
    new CreateVolumeCommand({
      AvailabilityZone: "us-east-1a",
      Size: 20,
      VolumeType: "gp3"
    })
  );

  console.log("Volume Created:", response.VolumeId);
}

createVolume().catch(console.error);
