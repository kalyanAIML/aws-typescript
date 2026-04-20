import {
  SecretsManagerClient,
  GetSecretValueCommand
} from "@aws-sdk/client-secrets-manager";

const client = new SecretsManagerClient({ region: "us-east-1" });

async function getSecret() {
  const command = new GetSecretValueCommand({
    SecretId: "database-password"
  });

  const response = await client.send(command);
  console.log("Secret:", response.SecretString);
}

getSecret();
