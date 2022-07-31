import {
  GetCommandInput, PutCommandInput, UpdateCommandInput, ScanCommandInput, QueryCommandInput,
} from '@aws-sdk/lib-dynamodb';

export type DbItemFindCommand = Omit<QueryCommandInput, 'TableName'>;

export type DbItemScanCommand = Omit<ScanCommandInput, 'TableName'>;

export type DbItemPutCommand = Omit<PutCommandInput, 'TableName'>;

export type DbItemGetCommand = Omit<GetCommandInput, 'TableName'>;

export type DbItemUpdateCommand = Omit<UpdateCommandInput, 'TableName'>;
