import { NextApiRequest, NextApiResponse } from 'next';
import ContactRequest, { IContactRequest } from '../../src/core/Models/ContactRequest';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(500).send({
      error: 'method not implemented',
    });
  }

  const request: ContactRequest = new ContactRequest(req.body as IContactRequest);
  if (request.isValid() === null) {
    try {
      const response = await request.save();

      return res.status(204).send({ reservationId: response.Attributes });
    } catch (e) {
      return res.status(400).send({
        error: e,
      });
    }
  }

  return res.status(400).send({
    error: 'Bad Payload',
  });
};
