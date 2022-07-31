/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  DeleteItemCommand,
  DynamoDBClient,
  QueryCommand,
  ScanCommand,
  UpdateItemCommandInput,
} from '@aws-sdk/client-dynamodb';
import {
  DeleteCommandInput,
  DeleteCommandOutput,
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  GetCommandOutput,
  PutCommand,
  PutCommandInput,
  PutCommandOutput,
  QueryCommandOutput,
  ScanCommandOutput,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb';

import ProjectConfig from '@/utils/ProjectConfig';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import AwsError from '../ApiErrors/AwsError';
import { DbItemFindCommand, DbItemPutCommand, DbItemScanCommand } from './types/DbClientCommand';

const marshallOptions = {
  convertEmptyValues: false,
  removeUndefinedValues: true,
  convertClassInstanceToMap: true,
};

const unmarshallOptions = {
  wrapNumbers: false,
};

const translateConfig = { marshallOptions, unmarshallOptions };

export default class DbClient {
  readonly _dbClient: DynamoDBDocumentClient;

  readonly _tableName = 'refugehulman';

  constructor() {
    const dynamoClient = new DynamoDBClient({ region: ProjectConfig.REGION });
    this._dbClient = DynamoDBDocumentClient.from(dynamoClient, translateConfig);
  }

  protected get dbClient(): DynamoDBDocumentClient {
    return this._dbClient;
  }

  protected get tableName() {
    return this._tableName;
  }

  public async write(payload: DbItemPutCommand): Promise<PutCommandOutput> {
    try {
      const commandInput :PutCommandInput = {
        TableName: this.tableName,
        ...payload,
      };
      // @ts-ignore
      return await this.dbClient.send(new PutCommand(commandInput));
    } catch (e) {
      throw new AwsError(e as Error);
    }
  }

  public async update(payload: UpdateItemCommandInput): Promise<PutCommandOutput> {
    try {
      const commandInput: UpdateItemCommandInput = {
        ...payload,
        TableName: this.tableName,
      };
      // @ts-ignore
      return await this.dbClient.send(new UpdateCommand(commandInput));
    } catch (e) {
      throw new AwsError(e as Error);
    }
  }

  public async read(payload: GetCommandInput['Key'], AttributesToGet: string[] = []): Promise<GetCommandOutput> {
    try {
      // @ts-ignore
      return await this.dbClient.send(new GetCommand({
        TableName: this.tableName,
        Key: { ...payload },
        AttributesToGet,
      }));
    } catch (e) {
      throw new AwsError(e as Error);
    }
  }

  public async delete(payload: DeleteCommandInput['Key']): Promise<DeleteCommandOutput> {
    try {
      return await this.dbClient.send(new DeleteItemCommand({
        TableName: this.tableName,
        Key: { ...payload },
      }));
    } catch (e) {
      throw new AwsError(e as Error);
    }
  }

  public async query(payload: DbItemFindCommand): Promise<QueryCommandOutput> {
    try {
      const response = await this.dbClient.send(new QueryCommand({
        TableName: this.tableName,
        ...payload,
      }));

      return {
        ...response,
        Items: response.Items?.map((el) => unmarshall(el)),
      };
    } catch (e) {
      throw new AwsError(e as Error);
    }
  }

  public async scan(payload: DbItemScanCommand): Promise<ScanCommandOutput> {
    try {
      const response = await this.dbClient.send(new ScanCommand({
        TableName: this.tableName,
        ...payload,
      }));

      return {
        ...response,
        Items: response.Items?.map((el) => unmarshall(el)),
      };
    } catch (e) {
      throw new AwsError(e as Error);
    }
  }
}
