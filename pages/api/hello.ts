import { NextApiResponse, NextApiRequest } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json([1, 2, 3, 4, 5]);
}
