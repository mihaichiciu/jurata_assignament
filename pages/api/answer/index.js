const handler = async (req, res) => {
  if (req.method === 'POST') {
    req.body = JSON.parse(req.body);
    await fetch(process.env.API_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_AUTHORIZATION_KEY}`,
      },
      body: JSON.stringify({
        query: req.body.query,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        return res.status(data.Code || 200).json(data);
      })
      .catch((err) => res.status(400).json(err));
  } else {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};

export default handler;
