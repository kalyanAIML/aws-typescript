import {
  EC2Client,
  StartInstancesCommand,
  StopInstancesCommand,
  RebootInstancesCommand,
  TerminateInstancesCommand,
  DescribeInstancesCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

const instanceId = "i-1234567890abcdef0";

// Get current EC2 instance state
async function getInstanceState() {
  const command = new DescribeInstancesCommand({
    InstanceIds: [instanceId]
  });

  const response = await ec2.send(command);

  const state =
    response.Reservations?.[0]?.Instances?.[0]?.State?.Name;

  console.log("Current Instance State:", state);
}

// Start EC2 instance
async function startInstance() {
  const command = new StartInstancesCommand({
    InstanceIds: [instanceId]
  });

  const response = await ec2.send(command);
  console.log("Instance Started:", response);
}

// Stop EC2 instance
async function stopInstance() {
  const command = new StopInstancesCommand({
    InstanceIds: [instanceId]
  });

  const response = await ec2.send(command);
  console.log("Instance Stopped:", response);
}

// Reboot EC2 instance
async function rebootInstance() {
  const command = new RebootInstancesCommand({
    InstanceIds: [instanceId]
  });

  await ec2.send(command);
  console.log("Instance Rebooted");
}

// Terminate EC2 instance
async function terminateInstance() {
  const command = new TerminateInstancesCommand({
    InstanceIds: [instanceId]
  });

  const response = await ec2.send(command);
  console.log("Instance Terminated:", response);
}

// Practice sequence
async function main() {
  await getInstanceState();

  // Uncomment one action at a time for practice

  // await startInstance();

  // await stopInstance();

  // await rebootInstance();

  // await terminateInstance();

  await getInstanceState();
}

main().catch(console.error);
