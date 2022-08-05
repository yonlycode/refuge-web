import InputErrorMessages from '@/constants/InputErrorMessages';
import { InputValidators } from '@/utils/InputUtils';

import DbItem from '@/core/Database/DbItem';
import { RecordType } from '@/core/Database/types/meta';

import { IEateryReservation } from './types/IEateryReservation';

export default class EateryReservation extends DbItem<IEateryReservation> {
  constructor(reservation?: IEateryReservation) {
    super(RecordType.EATERY, reservation);
  }

  public isValid() {
    if (!this.data) {
      throw new Error('no payload');
    }

    let errors: Partial<Record<keyof IEateryReservation, InputErrorMessages>> = {};

    Object.keys(this.data).forEach((el) => {
      console.log(el);
      const attrName = el as keyof IEateryReservation;
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
