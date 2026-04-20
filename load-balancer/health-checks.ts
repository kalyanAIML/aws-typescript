
```ts id="m2y5ks"
// load-balancer/health-checks.ts

import {
  ElasticLoadBalancingV2Client,
  ModifyTargetGroupCommand
} from "@aws-sdk/client-elastic-load-balancing-v2";

const elb = new ElasticLoadBalancingV2Client({
  region: "us-east-1"
});

async function configureHealthCheck() {
  const response = await elb.send(
    new ModifyTargetGroupCommand({
      TargetGroupArn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:targetgroup/my-target-group/123456",
      HealthCheckEnabled: true,
      HealthCheckPath: "/health",
      HealthCheckProtocol: "HTTP",
      HealthCheckIntervalSeconds: 30
    })
  );

  console.log(response);
}

configureHealthCheck().catch(console.error);
