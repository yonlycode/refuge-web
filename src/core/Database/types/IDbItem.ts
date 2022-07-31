import {
  DeleteCommandOutput,
  GetCommandOutput,
  QueryCommandOutput,
  ScanCommandOutput,
  UpdateCommandOutput,
} from '@aws-sdk/lib-dynamodb';

import InputErrorMessages from '@/constants/InputErrorMessages';

import {
  FilterKeys,
  MetaKeys,
} from './meta';

import {
  DbItemFindCommand,
  DbItemScanCommand,
} from './DbClientCommand';

export type DbItemOf<T> = T & FilterKeys & MetaKeys;

export interface IDbItem<T> {

    data: T | null;
    filterKeys: FilterKeys;
    record: DbItemOf<T> | null;

    /*
    * TODO - documentation
    */
    delete: (filterKey: string) => Promise<DeleteCommandOutput>
    /*
    * TODO - documentation
    */
    find: (query?: DbItemFindCommand) => Promise<QueryCommandOutput>
    /*
    * TODO - documentation
    */
    get: (filterKey: string, AttributesToGet?: string[]) => Promise<GetCommandOutput>;
    /*
    * TODO - documentation
    */
    isValid: () => Partial<Record<keyof T, InputErrorMessages>> | null;
    /*
    * TODO - documentation
    */
    mutate: (filterKey: string, newData: Partial<T>) => Promise<UpdateCommandOutput>
    /*
    * TODO - documentation
    */
    new: (newData: T) => IDbItem<T>
    /*
    * TODO - documentation
    */
    save: () => Promise<string>
    // TODO - implement this
    // list: (filterKey: string) => Promise<GetCommandOutput>;
    /*
    * TODO - documentation
    */
    scan: (query?: DbItemScanCommand) => Promise<ScanCommandOutput>
}
