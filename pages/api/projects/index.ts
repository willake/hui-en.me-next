// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { projectArticles } from '../../../data/project';
import { ProjectArticle } from "../../../schema";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectArticle[]>
) {
  res.status(200).json(projectArticles)
}
