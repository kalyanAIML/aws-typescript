// autoscaling/launch-template.ts

import {
  EC2Client,
  CreateLaunchTemplateCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function createLaunchTemplate() {
  const response = await ec2.send(
    new CreateLaunchTemplateCommand({
      LaunchTemplateName: "WebTemplate",
      LaunchTemplateData: {
        ImageId: "ami-1234567890abcdef0",
        InstanceType: "t3.micro",
        SecurityGroupIds: ["sg-1234567890abcdef0"]
      }
    })
  );

  console.log(response.LaunchTemplate?.LaunchTemplateId);
}

createLaunchTemplate().catch(console.error);
