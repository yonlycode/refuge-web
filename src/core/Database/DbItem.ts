import { randomUUID } from 'crypto';

import InputErrorMessages from '@/constants/InputErrorMessages';
import ObjectNotFoundError from '@/core/ApiErrors/ObjectNotFoundError';
import BadPayloadError from '@/core/ApiErrors/BadPayloadError';

import {
  FilterKeys,
  MetaKeys,
  RecordType,
} from './types/meta';
import {
  IDbItem,
} from './types/IDbItem';

import DbClient from './DbClient';
import {
  DbItemFindCommand,
  DbItemScanCommand,
} from './types/DbClientCommand';

export default abstract class DbItem<T> implements IDbItem<T> {
  protected _dbClient = new DbClient();

  protected _recordData: T | null;

  protected _meta: MetaKeys | null;

  protected _partitionKey: RecordType;

  protected _filterKey : string;

  constructor(partitionKey: RecordType, data?: T, meta?: MetaKeys) {
    this._recordData = data ?? null;
    this._meta = meta ?? {
      created_at: Date.now().toString(),
    };
    this._partitionKey = partitionKey;
    this._filterKey = randomUUID();
  }

  abstract isValid(): Partial<Record<keyof T, InputErrorMessages>> | null;

  get data() {
    return this._recordData;
  }

  set data(data: T | null) {
    this._recordData = data;
  }

  get filterKeys() :FilterKeys {
    return {
      partition_key: this._partitionKey,
      filter_key: this._filterKey,
    };
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

  public async delete(uuid: string) {
    return this._dbClient.delete({
      partition_key: {
        S: this._partitionKey,
      },
      filter_key: {
        S: uuid,
      },
    });
  }

  public async find(query?: DbItemFindCommand) {
    const config: DbItemFindCommand = {
      ...query ? {
        ...query,
        KeyConditionValues: {
          ':pk': { S: this._partitionKey },
        },
        KeyConditionExpression: 'partition_key = :pk',
      } : {
        ExpressionAttributeValues: {
          ':pk': { S: this._partitionKey },
          ':fk': { S: this._filterKey },
        },
      },
    };

    const response = await this._dbClient.query(config);

    if (!response.Items) {
      throw new ObjectNotFoundError({
        reference: JSON.stringify(query),
      });
    }

    return response;
  }

  public async get(filterKey: string, AttributesToGet?: string[]) {
    const response = await this._dbClient.read({
      partition_key: this._partitionKey,
      filter_key: filterKey,
    }, AttributesToGet);

    if (!response.Item) {
      throw new ObjectNotFoundError({
        reference: filterKey,
      });
    }

    return response;
  }

  public async mutate(filterKey: string, newData: Partial<T>) {
    return this._dbClient.write({
      Item: {
        ...newData,
        filter_key: filterKey,
        partition_key: this._partitionKey,
        updated_at: Date.now().toString(),
      },
    });
  }

  public new(data: T): IDbItem<T> {
    this._recordData = data ?? null;
    this._meta = {
      created_at: Date.now().toString(),
    };
    this._filterKey = randomUUID();

    return this;
  }

  public async save() {
    if (!this.record) {
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

    await this._dbClient.write({
      Item: { ...this.record },
    });

    return this._filterKey;
  }

  public async scan(query?: DbItemScanCommand) {
    const config: DbItemScanCommand = {
      ...query ? {
        ...query,
        KeyCondition: {
          ':pk': { S: this._partitionKey },
        },
        KeyConditionExpression: 'partition_key = :pk',
      } : {
        ExpressionAttributeValues: {
          ':pk': { S: this._partitionKey },
          ':fk': { S: this._filterKey },
        },
      }
      ,
    };

    const response = await this._dbClient.scan(config);

    if (!response.Items) {
      throw new ObjectNotFoundError({
        reference: JSON.stringify(query),
      });
    }

    return response;
  }
}
