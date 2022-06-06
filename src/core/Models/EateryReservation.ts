import { v4 as uuidv4 } from 'uuid';
import InputErrorMessages from '../../constants/InputErrorMessages';
import { InputValidators } from '../../utils/InputUtils';
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
  private reservationRecord: EateryReservationRecord|null;

  private reservation: IEateryReservation | null;

  private dbClient = new DbClient();

  //TODO - handle no reservation constructor
  constructor(reservation: IEateryReservation) {
    this.reservationRecord = {
      type: 'EATERY',
      partition_key: uuidv4(),
      filter_key: uuidv4(),
      createdAt: Date.now().toLocaleString('Fr'),
      ...reservation,
    };

    this.reservation = { ...reservation }
  }

  public isValid() {
    if (!this.reservation) {
      return 'no payload';
    }

    let errors: Partial<Record<keyof IEateryReservation, InputErrorMessages>> = {} 

    Object.keys(this.reservation).forEach((el) => {
      const attrName = el as keyof IEateryReservation;
      const attrValue = this.reservation![attrName];
      const error = InputValidators[attrName](attrValue)

      if ( error ) {
        errors = {
          ...errors,
          [attrName]: error
        };
      }
    })

    return Object.keys(errors).length === 0 ? null : errors;
  }

  // WARNING - Not tested yet
  public mutate(reservation :IEateryReservation) {
    this.reservation = {
      ...this.reservation,
      ...reservation,
    };
    this.reservationRecord ={
      ...this.reservationRecord,
      ...reservation,
      updatedAt: Date.now().toLocaleString('Fr'),
    }
  }

  // WARNING - Not tested yet
  public async save() {
    if (!this.reservationRecord) {
      throw new Error('reservation empty');
    }
    return this.dbClient.write(this.reservationRecord);
  }

  // WARNING - Not tested yet
  public async get(config: FilterKeys) {
    if (!config.filter_key || !config.partition_key) {
      throw new Error('Bad Payload');
    }
    return this.dbClient.read(config);
  }
}
