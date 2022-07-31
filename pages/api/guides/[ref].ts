import { NextApiRequest, NextApiResponse } from 'next';

import ApiErrors from '@/core/ApiErrors/ApiErrors';
import GuideArticle from '@/core/Guides/Guide';

export default async function ContactApi(req: NextApiRequest, res: NextApiResponse) {
  const { ref } = req.query;
  const guide: GuideArticle = new GuideArticle();

  switch (req.method) {
    case 'GET':
      try {
        const response = await guide.get(ref as string);

        return res.status(200).json(response);
      } catch (e) {
        console.log(e);

        // const error = (e as ApiErrors);
        return res.status(500).json((e as ApiErrors).message);
      }

    case 'PUT':
      try {
        const response = await guide.mutate((ref as string), req.body);

        return res.status(200).json(response);
      } catch (e) {
        const error = (e as ApiErrors);
        return res.status(error.statusCode).json((e as ApiErrors).errorDetail);
      }

    case 'DELETE':
      try {
        const response = await guide.delete(ref as string);

        return res.status(200).json(response);
      } catch (e) {
        const error = (e as ApiErrors);
        console.log(e);

        return res.status(error.statusCode).json((e as ApiErrors).errorDetail);
      }

    default:
      res.status(405).send('Method Not Allowed');
      break;
  }
}
