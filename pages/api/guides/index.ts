import { NextApiRequest, NextApiResponse } from 'next';

import ApiErrors from '@/core/ApiErrors/ApiErrors';
import GuideArticle from '@/core/Guides/Guide';
import { IGuideArticle } from '@/core/Guides/types/IGuideArticle';

export default async function ContactRequestIndex(req: NextApiRequest, res: NextApiResponse) {
  const Guide: GuideArticle = new GuideArticle();

  switch (req.method) {
    case 'GET':
      // const queryKeys: Array<keyof IContactRequest> = Object.keys(req.query as IContactRequest);
      const { search } = req.query;
      const { body } = req;

      try {
        const response = search
          ? await Guide.searchGuideArticlesByName(search as string)
          : await Guide.find(body ?? {});

        return res.status(200).json(response.Items);
      } catch (e) {
        const error = (e as ApiErrors);
        return res.status(error.statusCode).json(error.errorDetail);
      }
    case 'POST':
      try {
        const response = await Guide.new(req.body as IGuideArticle).save();

        return res.status(200).json(response);
      } catch (e) {
        const error = (e as ApiErrors);
        return res.status(error.statusCode).json(error.errorDetail);
      }
    default:
      res.status(405).send('Method Not Allowed');
      break;
  }
}
