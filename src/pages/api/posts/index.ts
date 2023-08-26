import type { NextApiRequest, NextApiResponse } from 'next'

import { Posts } from '../../../../stub'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(Posts)
}
