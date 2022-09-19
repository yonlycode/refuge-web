import InputErrorMessages from '@/constants/InputErrorMessages';
import { InputValidators } from '@/utils/InputUtils';

import { RecordType } from '@/core/Database/types/meta';
import DbItem from '@/core/Database/DbItem';

import { IRoomReservation } from './types/IRoomReservation';

export default class RoomReservation extends DbItem<IRoomReservation> {
  constructor(reservation?: IRoomReservation) {
    super(RecordType.ROOM, reservation);
  }

  public isValid(): null | Partial<Record<keyof IRoomReservation, InputErrorMessages>> {
    if (!this.data) {
      throw new Error('no payload');
    }

    let errors: Partial<Record<keyof IRoomReservation, InputErrorMessages>> = {};

    Object.keys(this.data).forEach((el) => {
      const attrName = el as keyof IRoomReservation;
      const attrValue = this.data![attrName];
      const error = InputValidators[attrName] && InputValidators[attrName](attrValue);

      if (attrName === 'message') return;

      if (error) {
        errors = {
          ...errors,
          [attrName]: error,
        };
      }
    });

    return Object.keys(errors).length === 0 ? null : errors;
  }
}
