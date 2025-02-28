import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key"; // Use environment variables in production

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { uid, password } = req.body;

  // Dummy user authentication (Replace with database check)
  if (uid === "admin" && password === "password123") {
    const token = jwt.sign({ uid }, SECRET_KEY, { expiresIn: "1h" });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Invalid user id or password" });
}
