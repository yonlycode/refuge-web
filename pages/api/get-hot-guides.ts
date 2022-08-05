import { NextApiRequest, NextApiResponse } from 'next';

import ApiErrors from '@/core/ApiErrors/ApiErrors';
import GuideArticle from '@/core/Guides/Guide';

export default async function getHotGuides(req: NextApiRequest, res: NextApiResponse) {
  const Guide: GuideArticle = new GuideArticle();

  switch (req.method) {
    case 'GET':
      try {
        const response = await Guide.getHotGuideArticles();
        return res.status(200).json(response);
      } catch (e) {
        const error = (e as ApiErrors);
        res.status(error.statusCode).json(error.errorDetail);
      }
      break;

    default:
      res.status(405).send('Method Not Allowed');
      break;
  }
}
