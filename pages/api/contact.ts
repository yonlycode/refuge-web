import { NextApiRequest, NextApiResponse } from 'next';

import ContactRequest, { IContactRequest } from '../../src/core/ContactRequest/ContactRequest';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(500).send('method not implemented');
  }

  const request: ContactRequest = new ContactRequest(req.body as IContactRequest);
  if (request.isValid() === null) {
    try {
      const response = await request.save();

      return res.status(204).send({ reservationId: response.Attributes });
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  return res.status(400).send('Bad Payload');
};
