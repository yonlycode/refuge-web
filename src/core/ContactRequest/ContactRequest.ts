import { v4 as uuidv4 } from 'uuid';

import DbClient from '../DbClient';
import InputErrorMessages from '../../constants/InputErrorMessages';
import { InputValidators } from '../../utils/InputUtils';
import {
  FilterKeys,
  MetaKeys,
  TypeMeta,
} from '../meta';

export type IContactRequest = {
    email: string,
    message: string,
    name: string,
    phone: string,
    subject: string,
};

export type ContactRequestRecord = FilterKeys & MetaKeys & IContactRequest & TypeMeta;

export default class ContactRequest {
  private requestRecord: ContactRequestRecord | null;

  private request: IContactRequest | null;

  private dbClient = new DbClient();

  // TODO - handle no request constructor
  constructor(request: IContactRequest) {
    this.requestRecord = {
      partition_key: uuidv4(),
      filter_key: uuidv4(),
      createdAt: Date.now().toLocaleString('Fr'),
      type: 'CONTACT',
      ...request,
    };
    this.request = { ...request };
  }

  public isValid() {
    if (!this.request) {
      return 'no payload';
    }

    let errors: Partial<Record<keyof IContactRequest, InputErrorMessages>> = {};

    Object.keys(this.request).forEach((el) => {
      const attrName = el as keyof IContactRequest;
      const attrValue = this.request![attrName];
      const error = InputValidators[attrName](attrValue);

      if (error) {
        errors = {
          ...errors,
          [attrName]: error,
        };
      }
    });

    return Object.keys(errors).length === 0 ? null : errors;
  }

  // WARNING - Not tested yet
  public mutate(request: IContactRequest) {
    this.requestRecord = {
      ...this.requestRecord,
      ...request,
      updatedAt: Date.now().toLocaleString('Fr'),
    };
    this.request = {
      ...this.request,
      ...request,
    };
  }

  // WARNING - Not tested yet
  public async save() {
    if (!this.requestRecord) {
      throw new Error('request empty');
    }
    return this.dbClient.write(this.requestRecord);
  }

  // WARNING - Not tested yet
  public async get(config: FilterKeys) {
    if (!config.filter_key || !config.partition_key) {
      throw new Error('Bad Payload');
    }
    return this.dbClient.read(config);
  }
}
