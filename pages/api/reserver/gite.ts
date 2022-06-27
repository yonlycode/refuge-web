import { NextApiRequest, NextApiResponse } from 'next';

import RoomReservation, { IRoomReservation } from '../../../src/core/ReservationRequest/RoomReservation';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(500).send('method not implemented');
  }

  const reservation: RoomReservation = new RoomReservation(req.body as IRoomReservation);
  if (reservation.isValid() === null) {
    try {
      await reservation.save();
      return res.status(204).end();
    } catch (e) {
      return res.status(400).send(e);
    }
  }
  return res.status(400).send('Bad Payload');
};
