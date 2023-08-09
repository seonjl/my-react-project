// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const waf = {
  "name": "AWSManagedRulesAmazonIpReputationList",
  "priority": 0,
  "override_action": "None",
  "rule_action_override": [
    {
      "name": "AWSManagedIPReputationList",
      "action_to_use": "Count"
    },
    {
      "name": "AWSManagedReconnaissanceList",
      "action_to_use": "Count"
    },
    {
      "name": "AWSManagedIPDDosList",
      "action_to_use": "Count"
    }
  ],
  "vendor_name": "AWS"
}

export type Waf = typeof waf

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'POST') {
    // Process a POST request
    return res.status(200).json(req.body)
  }
  
  return res.status(200).json(waf)
}
