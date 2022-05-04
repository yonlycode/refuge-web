import { v4 as uuidv4 } from 'uuid';
import DbClient from '../DbClient';
import { FilterKeys, TypeMeta } from './meta';

export type IEateryReservation = {
  firstName: string,
  lastName: string,
  email: string,
  message: string,
  date: string,
  phone: string,
  customerCount: number
};

export type EateryReservationRecord = FilterKeys & TypeMeta & IEateryReservation;

export default class EateryReservation {
  private reservation: EateryReservationRecord|null;

  private dbClient = new DbClient();

  constructor(reservation: IEateryReservation) {
    this.reservation = {
      type: 'EATERY',
      partition_key: uuidv4(),
      filter_key: uuidv4(),
      createdAt: Date.now().toLocaleString('Fr'),
      ...reservation,
    };
  }

  // TODO - finishs this validation rule
  public isValid() :string | null {
    // TODO - finish this validation rule
    if (!this.reservation) {
      return '';
    }
    if (this.reservation.firstName.length < 3) {
      return '';
    }
    if (this.reservation.lastName.length < 3) {
      return '';
    }
    if (this.reservation.customerCount < 1) {
      return '';
    }
    return null;
  }

  public mutate(reservation :IEateryReservation) {
    this.reservation = {
      ...this.reservation,
      ...reservation,
      updatedAt: Date.now().toLocaleString('Fr'),
    };
  }

  public async save() {
    if (!this.reservation) {
      throw new Error('reservation empty');
    }
    return this.dbClient.write(this.reservation);
  }

  public async get(config: FilterKeys) {
    if (!config.filter_key || !config.partition_key) {
      throw new Error('Bad Payload');
    }
    return this.dbClient.read(config);
  }
}
