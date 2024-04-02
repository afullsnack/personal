
export async function POST(request: Request) {
  const jsonRequset = await request.json();

  try {
    const { email } = jsonRequset as Record<string, any>;

    const response = await fetch(`https://api.useplunk.com/v1/contacts`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.PLUNK_SECRET_KEY}` },
      body: JSON.stringify({
        email,
        subscribed: true,
        data: {
          project: "afullsnack"
        }
      })
    });

    const data = await response.json();

    return Response.json(data);

  } catch (err: any) {
    console.log(err, ":::Error on subscribing user attempt");

    return new Response(err, {
      status: 501,
    });

  }
}
