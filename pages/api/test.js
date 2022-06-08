export default function handler(req, res) {
    res.status(200).json(process.env.WEBSITE_EXAMPLE_SECRET)
  }