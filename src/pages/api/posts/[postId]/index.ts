import type { NextApiRequest, NextApiResponse } from 'next'

import { Posts } from '../../../../../stub'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const post = Posts.find((post) => post._id === req.query.postId)

  return res.status(200).json(post)
}
