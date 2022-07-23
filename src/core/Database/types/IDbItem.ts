import {
  DeleteCommandOutput,
  GetCommandOutput,
  PutCommandOutput,
  QueryCommandInput,
  QueryCommandOutput,
} from '@aws-sdk/lib-dynamodb';

import InputErrorMessages from '@/constants/InputErrorMessages';

import { FilterKeys, MetaKeys } from './meta';

export type DbItemFindQuery = Omit<QueryCommandInput, 'TableName'>;

export interface IDbItem<T> {
    data: T | null;
    filterKeys: FilterKeys;
    record: T & MetaKeys & FilterKeys | null;

    /*
    * TODO - documentation
    */
    delete: (filterKey: string) => Promise<DeleteCommandOutput>
    /*
    * TODO - documentation
    */
    find: (query?: DbItemFindQuery) => Promise<QueryCommandOutput>
    /*
    * TODO - documentation
    */
    get: (filterKey: string) => Promise<GetCommandOutput>;
    /*
    * TODO - documentation
    */
    isValid: () => Partial<Record<keyof T, InputErrorMessages>> | null;
    /*
    * TODO - documentation
    */
    mutate: (newData: T) => Promise<PutCommandOutput>
    /*
    * TODO - documentation
    */
    new: (newData: T) => void
    /*
    * TODO - documentation
    */
    save: () => Promise<string>
    // TODO - implement this
    // list: (filterKey: string) => Promise<GetCommandOutput>;
}
