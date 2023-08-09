// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const wafList = [{"WAF1":"WAF1_ID"},{"WAF2":"WAF2_ID"}];

export type WafList = typeof wafList;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WafList>
) {
  res.status(200).json(wafList)
}
