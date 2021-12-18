// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { HomeAPIData } from "../../../schema";
import { homeData } from '../../../data/home';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HomeAPIData>
) {
  res.status(200).json(homeData)
}
