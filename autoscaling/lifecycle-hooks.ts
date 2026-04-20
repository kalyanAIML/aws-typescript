// autoscaling/lifecycle-hooks.ts

import {
  AutoScalingClient,
  PutLifecycleHookCommand
} from "@aws-sdk/client-auto-scaling";

const autoscaling = new AutoScalingClient({
  region: "us-east-1"
});

async function createLifecycleHook() {
  const response = await autoscaling.send(
    new PutLifecycleHookCommand({
      AutoScalingGroupName: "my-auto-scaling-group",
      LifecycleHookName: "WaitForConfiguration",
      LifecycleTransition: "autoscaling:EC2_INSTANCE_LAUNCHING",
      HeartbeatTimeout: 300
    })
  );

  console.log(response);
}

createLifecycleHook().catch(console.error);
