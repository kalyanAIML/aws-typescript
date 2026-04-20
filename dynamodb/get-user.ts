import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });

async function getUser() {
  const command = new GetItemCommand({
    TableName: "Users",
    Key: {
      userId: { S: "101" }
    }
  });

  const response = await client.send(command);
  console.log(response.Item);
}

getUser();
