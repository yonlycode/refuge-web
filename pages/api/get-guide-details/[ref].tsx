import { NextApiRequest, NextApiResponse } from 'next';

import ApiErrors from '@/core/ApiErrors/ApiErrors';
import GuideArticle from '@/core/Guides/Guide';

export default async function getGuideDetails(req: NextApiRequest, res: NextApiResponse) {
  const Guide: GuideArticle = new GuideArticle();
  const { ref } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const response = await Guide.get(ref as string ?? '');
        return res.status(200).json(response.Item);
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
