import { v4 as uuidv4 } from 'uuid';
import { ContactClient } from '../DbClient';
import { FilterKeys, MetaKeys } from './meta';

export type IContactRequest = {
    email: string,
    message: string,
    name: string,
    phone: string,
    subject: string,
};

export type ContactRequestRecord = FilterKeys & MetaKeys & IContactRequest;

export default class ContactRequest {
  private request: ContactRequestRecord | null;

  private dbClient = ContactClient;

  constructor(request: IContactRequest) {
    this.request = {
      partition_key: uuidv4(),
      filter_key: uuidv4(),
      createdAt: Date.now().toLocaleString('Fr'),
      ...request,
    };
  }

  // TODO - finishs this validation rule
  public isValid(): string | null {
    if (!this.request) {
      return '';
    }
    if (this.request.name.length < 3) {
      return '';
    }
    if (this.request.subject.length < 3) {
      return '';
    }
    if (this.request.phone.length !== 10) {
      return '';
    }
    return null;
  }

  public mutate(request: ContactRequestRecord) {
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
