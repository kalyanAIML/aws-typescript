# ec2/cpu-credits.md

## Check CPU Credits for T2/T3 Instance

```bash
aws cloudwatch get-metric-statistics \
  --namespace AWS/EC2 \
  --metric-name CPUCreditBalance \
  --dimensions Name=InstanceId,Value=i-1234567890abcdef0 \
  --start-time 2026-04-01T00:00:00Z \
  --end-time 2026-04-20T23:59:59Z \
  --period 3600 \
  --statistics Average
