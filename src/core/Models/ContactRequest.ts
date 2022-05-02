import { v4 as uuidv4 } from 'uuid';
import { InputValidators } from '../../utils/InputUtils';
import DbClient from '../DbClient';
import {
  FilterKeys,
  MetaKeys,
  TypeMeta,
} from './meta';

export type IContactRequest = {
    email: string,
    message: string,
    name: string,
    phone: string,
    subject: string,
};

export type ContactRequestRecord = FilterKeys & MetaKeys & IContactRequest & TypeMeta;

export default class ContactRequest {
  private request: ContactRequestRecord | null;

  private dbClient = new DbClient();

  constructor(request: IContactRequest) {
    this.request = {
      partition_key: uuidv4(),
      filter_key: uuidv4(),
      createdAt: Date.now().toLocaleString('Fr'),
      type: 'CONTACT',
      ...request,
    };
  }

  // TODO - finishs this validation rule
  public isValid(): string | null {
    if (!this.request) {
      return 'no payload';
    }

    const {
      name,
      email,
      message,
      phone,
      subject,
    } = this.request;

    if (InputValidators.lastName(name)) {
      return InputValidators.lastName(name);
    }
    if (InputValidators.email(email)) {
      return InputValidators.email(email);
    }
    if (InputValidators.message(message)) {
      return InputValidators.message(message);
    }
    if (InputValidators.phone(phone)) {
      return InputValidators.phone(phone);
    }
    if (InputValidators.subject(subject)) {
      return InputValidators.subject(subject);
    }
    return null;
  }

  public mutate(request: IContactRequest) {
    this.request = {
      ...this.request,
      ...request,
      updatedAt: Date.now().toLocaleString('Fr'),
    };
  }

  public async save() {
    if (!this.request) {
      throw new Error('request empty');
    }
    return this.dbClient.write(this.request);
  }

  public async get(config: FilterKeys) {
    if (!config.filter_key || !config.partition_key) {
      throw new Error('Bad Payload');
    }
    return this.dbClient.read(config);
  }
}
