import type { NextApiRequest, NextApiResponse } from "next";
import { PostComments } from "../../../../../../stub";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postComment = PostComments.find(
    (postComment) => postComment.post === req.query.postId
  );

  if (!postComment) {
    res
      .status(404)
      .json({ message: `Post with id ${req.query.postId} not found.` });
    return;
  }

  res.status(200).json(postComment);
}
