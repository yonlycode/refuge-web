import InputErrorMessages from '@/constants/InputErrorMessages';
import { InputValidators } from '@/utils/InputUtils';

import { RecordType } from '@/core/Database/types/meta';
import DbItem from '@/core/Database/DbItem';

import { IContactRequest } from './types/IContactRequest';

export default class ContactRequest extends DbItem<IContactRequest> {
  constructor(reservation?: IContactRequest) {
    super(RecordType.CONTACT, reservation);
  }

  public isValid() {
    if (!this.data) {
      throw new Error('no payload');
    }

    let errors: Partial<Record<keyof IContactRequest, InputErrorMessages>> = {};

    Object.keys(this.data).forEach((el) => {
      const attrName = el as keyof IContactRequest;
      const attrValue = this.data![attrName];
      const error = InputValidators[attrName] && InputValidators[attrName](attrValue);

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
