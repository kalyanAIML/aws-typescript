// ebs/create-snapshot.ts

import { EC2Client, CreateSnapshotCommand } from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createSnapshot() {
  const response = await ec2.send(
    new CreateSnapshotCommand({
      VolumeId: "vol-1234567890abcdef0",
      Description: "Backup before update"
    })
  );

  console.log("Snapshot Created:", response.SnapshotId);
}

createSnapshot().catch(console.error);
