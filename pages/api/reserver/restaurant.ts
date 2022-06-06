import { NextApiRequest, NextApiResponse } from 'next';

import EateryReservation, { IEateryReservation } from '../../../src/core/Models/EateryReservation';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(500).send('method not implemented');
  }

  const request: EateryReservation = new EateryReservation(req.body as IEateryReservation);

  const errors = request.isValid()
  if (errors) {
    return res.status(400).send(errors);
  }

  try {
    await request.save();
    return res.status(204).end();
  } catch (e) {
    return res.status(400).send(e);
  }
};
