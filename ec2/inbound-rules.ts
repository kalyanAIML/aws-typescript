// security-groups/inbound-rules.ts

import {
  EC2Client,
  AuthorizeSecurityGroupIngressCommand
} from "@aws-sdk/client-ec2";

const ec2 = new EC2Client({ region: "us-east-1" });

async function allowInboundTraffic() {
  const response = await ec2.send(
    new AuthorizeSecurityGroupIngressCommand({
      GroupId: "sg-1234567890abcdef0",
      IpPermissions: [
        {
          IpProtocol: "tcp",
          FromPort: 22,
          ToPort: 22,
          IpRanges: [{ CidrIp: "0.0.0.0/0", Description: "SSH Access" }]
        },
        {
          IpProtocol: "tcp",
          FromPort: 80,
          ToPort: 80,
          IpRanges: [{ CidrIp: "0.0.0.0/0", Description: "HTTP Access" }]
        }
      ]
    })
  );

  console.log("Inbound Rules Added:", response);
}

allowInboundTraffic().catch(console.error);
