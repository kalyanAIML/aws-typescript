import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const dynamo = new DynamoDBClient({ region: "us-east-1" });

export const handler = async () => {
  const command = new PutItemCommand({
    TableName: "Users",
    Item: {
      userId: { S: "101" },
      name: { S: "Kalyan" },
      department: { S: "IT" }
    }
  });

  await dynamo.send(command);

  return {
    statusCode: 200,
    body: "User saved into DynamoDB"
  };
};
