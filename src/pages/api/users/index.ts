import type { NextApiRequest, NextApiResponse } from "next";

import { Users } from "../../../../stub";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Users);
}
