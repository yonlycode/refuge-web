import { v4 as uuidv4 } from 'uuid';

import DbClient from '../DbClient';
import InputErrorMessages from '../../constants/InputErrorMessages';
import { InputValidators } from '../../utils/InputUtils';
import { FilterKeys, TypeMeta } from './meta';

export type IRoomReservation = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    childrenCount: number;
    adultCount: number;
    phone: string;
    startDate: string;
    endDate: string;
};

export type RoomReservationRecord = IRoomReservation & FilterKeys & TypeMeta;

export default class RoomReservation {
  private reservationRecord: RoomReservationRecord|null;

  private reservation: IRoomReservation | null;

  private dbClient = new DbClient();

  constructor(reservation?: IRoomReservation) {
    this.reservationRecord = !reservation ? null : {
      type: 'ROOM',
      partition_key: uuidv4(),
      filter_key: uuidv4(),
      createdAt: Date.now().toLocaleString('Fr'),
      ...reservation,
    };

    this.reservation = !reservation ? null : { ...reservation };
  }

  public isValid(){
    if (!this.reservation) {
      return 'no payload';
    }

    let errors: Partial<Record<keyof IRoomReservation, InputErrorMessages>> = {}

    Object.keys(this.reservation).forEach((el) => {
      const attrName = el as keyof IRoomReservation;
      const attrValue = this.reservation![attrName];
      const error = InputValidators[attrName](attrValue)

      if (error) {
        errors = {
          ...errors,
          [attrName]: error
        };
      }
    })
  }

  // WARNING - Not tested yet
  public async get(config: FilterKeys) {
    if (!config.filter_key && !config.partition_key) {
      throw new Error('Bad Payload');
    }

    return this.dbClient.read(config);
  }

  // WARNING - Not tested yet
  public mutate(reservation: IRoomReservation) {
    this.reservationRecord = {
      ...this.reservationRecord,
      ...reservation,
      updatedAt: Date.now().toLocaleString('Fr'),
    };
    this.reservation = {
      ...this.reservation,
      ...reservation,
    };
  }

  // WARNING - Not tested yet
  public async save() {
    if (!this.reservationRecord) {
      throw new Error('No payload');
    }
    return this.dbClient.write(this.reservationRecord);
  }
}
