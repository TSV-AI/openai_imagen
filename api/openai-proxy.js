export default async function handler(req, res) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
      "User-Agent": "OpenAI/3.10.0"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();

  res.status(response.status).json(data);
}
