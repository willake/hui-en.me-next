// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AboutAPIData } from "../../../schema";
import { data } from '../../../data/about';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AboutAPIData>
) {
  res.status(200).json(data)
}
