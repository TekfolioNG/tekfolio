export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    // Parse the request body
    const body = await request.json();

    // Validate required fields
    if (!body.access_key || !body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing required fields",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Forward to Web3Forms
    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await web3formsResponse.json();

    return new Response(JSON.stringify(result), {
      status: web3formsResponse.ok ? 200 : 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error occurred. Please try again.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

// Handle preflight CORS requests
export async function onRequestOptions(context) {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}
