// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ProjectArticle } from "../../../schema";
import { projectArticles } from '../../../data/project';

type ErrorMessage = {
    message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectArticle | ErrorMessage>
) {
    const id = req.query.id;
    const filtered = projectArticles.filter(article => article.id.toString() === id);

    if(filtered.length > 0) {
        res.status(200).json(filtered[0]);
    }
    else {
        res.status(404).json({ message: `${id} is not found`});
    }
}
