// security-groups/outbound-rules.ts

import {
  EC2Client,
  AuthorizeSecurityGroupEgressCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function allowOutboundTraffic() {
  const response = await ec2.send(
    new AuthorizeSecurityGroupEgressCommand({
      GroupId: "sg-1234567890abcdef0",
      IpPermissions: [
        {
          IpProtocol: "-1",
          IpRanges: [{ CidrIp: "0.0.0.0/0", Description: "Allow All Outbound" }]
        }
      ]
    })
  );

  console.log("Outbound Rule Added:", response);
}

allowOutboundTraffic().catch(console.error);
