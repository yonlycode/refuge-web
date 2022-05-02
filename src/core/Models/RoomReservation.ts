import { v4 as uuidv4 } from 'uuid';
import DbClient from '../DbClient';
import { FilterKeys, TypeMeta } from './meta';

export type IRoomReservation = FilterKeys & TypeMeta & {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    childrenCount: number;
    adultCount: number;
    phone: string;
    startDate: string;
    endDate: string;
}

export default class RoomReservation {
  private reservation :IRoomReservation|null;

  private dbClient = new DbClient();

  constructor(reservation?: IRoomReservation) {
    this.reservation = !reservation ? null : {
      type: 'ROOM',
      partition_key: uuidv4(),
      filter_key: uuidv4(),
      createdAt: Date.now().toLocaleString('Fr'),
      ...reservation,
    };
  }

  public isValid(): string | null {
    // TODO - finish this validation rule
    if (!this.reservation) {
      throw new Error('No payload');
    }
    if (this.reservation.firstName.length < 3) {
      return '';
    }
    if (this.reservation.lastName.length < 3) {
      return '';
    }
    if (this.reservation.adultCount < 1) {
      return '';
    }
    return null;
  }

  public async get(config: FilterKeys) {
    if (!config.filter_key || !config.partition_key) {
      throw new Error('Bad Payload');
    }
    return this.dbClient.read(config);
  }

  public mutate(reservation: IRoomReservation) {
    this.reservation = {
      ...this.reservation,
      ...reservation,
      updatedAt: Date.now().toLocaleString('Fr'),
    };
  }

  public async save() {
    if (!this.reservation) {
      throw new Error('No payload');
    }
    return this.dbClient.write(this.reservation);
  }
}
