import { EC2Client, StartInstancesCommand } from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function startInstance() {
  const command = new StartInstancesCommand({
    InstanceIds: ["i-0123456789abcdef0"]
  });

  const response = await ec2.send(command);
  console.log("EC2 Started:", response);
}

startInstance();
