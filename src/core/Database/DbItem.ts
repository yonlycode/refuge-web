import { randomUUID } from 'crypto';

import InputErrorMessages from '@/constants/InputErrorMessages';
import ObjectNotFoundError from '@/core/ApiErrors/ObjectNotFoundError';
import BadPayloadError from '@/core/ApiErrors/BadPayloadError';

import DbClient from './DbClient';
import { FilterKeys, MetaKeys, RecordType } from './types/meta';
import { DbItemFindQuery, IDbItem } from './types/IDbItem';

export default abstract class DbItem<T> implements IDbItem<T> {
  private _dbClient = new DbClient();

  private _recordData: T | null;

  private _meta: MetaKeys | null;

  private _partitionKey: RecordType;

  private _uuid: string = randomUUID();

  constructor(partitionKey: RecordType, data?: T, meta?: MetaKeys) {
    this._recordData = data ?? null;
    this._meta = meta ?? null;
    this._partitionKey = partitionKey;
  }

  abstract isValid(): Partial<Record<keyof T, InputErrorMessages>> | null;

  get filterKeys() :FilterKeys {
    return {
      partition_key: this._partitionKey,
      filter_key: this._uuid,
    };
  }

  get data() {
    return this._recordData;
  }

  get record() {
    if (!this.data || !this._meta) {
      return null;
    }

    return {
      ...this.data,
      ...this.filterKeys,
      ...this._meta,
    };
  }

  public async save() {
    if (!this.data || !this.record) {
      throw new BadPayloadError({
        reference: 'no payload',
      });
    }

    const validationErrors = this.isValid();
    if (validationErrors) {
      throw new BadPayloadError({
        reference: JSON.stringify(validationErrors),
      });
    }
    await this._dbClient.write(this.record);

    return this._uuid;
  }

  public async mutate(newData: T) {
    this._recordData = {
      ...this.data,
      ...newData,
    };
    this._meta = {
      ...this._meta,
      updatedAt: Date.now().toLocaleString('Fr'),
    };

    if (!this.record || this.isValid() !== null) {
      throw new Error('No payload');
    }

    return this._dbClient.write(this.record);
  }

  public async get(filterKey: string) {
    if (!this.filterKeys.filter_key && !this.filterKeys.partition_key) {
      throw new Error('No payload');
    }

    const response = await this._dbClient.read({
      ...this.filterKeys,
      filter_key: filterKey,
    });

    if (!response.Item) {
      throw new ObjectNotFoundError({
        reference: filterKey,
      });
    }

    return response;
  }

  public async find(query?: DbItemFindQuery) {
    const config: DbItemFindQuery = {
      ...query,
      ExpressionAttributeValues: {
        ...query?.ExpressionAttributeNames,
        ':s': { S: this._partitionKey },
      },
      KeyConditionExpression:
        `partition_key = :s ${
          query?.KeyConditionExpression
            ? `AND ${query.KeyConditionExpression}`
            : ''
        }`,
      ConsistentRead: true,
    };

    const response = await this._dbClient.query(config);

    if (!response.Items) {
      throw new ObjectNotFoundError({
        reference: JSON.stringify(query),
      });
    }

    return response;
  }

  public async delete(filterKey: string) {
    return this._dbClient.delete({
      partition_key: this._partitionKey,
      filter_key: filterKey,
    });
  }

  public new(data: T): void {
    this._recordData = data ?? null;
    this._meta = {
      createdAt: Date.now().toLocaleString('Fr'),
    };
    this._uuid = randomUUID();
  }
}
