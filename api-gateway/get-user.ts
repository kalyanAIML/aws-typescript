export const handler = async () => {
  const user = {
    id: 101,
    name: "Kalyan",
    role: "Developer"
  };

  return {
    statusCode: 200,
    body: JSON.stringify(user)
  };
};
