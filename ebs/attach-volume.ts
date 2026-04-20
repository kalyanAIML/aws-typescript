// ebs/attach-volume.ts

import { EC2Client, AttachVolumeCommand } from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function attachVolume() {
  const response = await ec2.send(
    new AttachVolumeCommand({
      Device: "/dev/sdf",
      InstanceId: "i-1234567890abcdef0",
      VolumeId: "vol-1234567890abcdef0"
    })
  );

  console.log("Volume Attached:", response.State);
}

attachVolume().catch(console.error);
