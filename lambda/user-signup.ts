export const handler = async (event: any) => {
  const name: string = event.name;
  const email: string = event.email;

  console.log(`New user signup: ${name} - ${email}`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "User registered successfully"
    })
  };
};
