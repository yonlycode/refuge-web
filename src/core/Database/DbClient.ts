import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb';
import {
  DeleteCommand,
  DeleteCommandInput,
  DeleteCommandOutput,
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  GetCommandOutput,
  PutCommand,
  PutCommandInput,
  PutCommandOutput,
  QueryCommandInput,
  QueryCommandOutput,
} from '@aws-sdk/lib-dynamodb';

import ProjectConfig from '@/utils/ProjectConfig';

const marshallOptions = {
  convertEmptyValues: false,
  removeUndefinedValues: true,
  convertClassInstanceToMap: false,
};

const unmarshallOptions = {
  wrapNumbers: false,
};

const translateConfig = { marshallOptions, unmarshallOptions };

export default class DbClient {
  private _DbClient: DynamoDBDocumentClient;

  private _tableName = 'refugehulman';

  constructor() {
    const dynamoClient = new DynamoDBClient({ region: ProjectConfig.REGION });
    this._DbClient = DynamoDBDocumentClient.from(dynamoClient, translateConfig);
  }

  get tableName() {
    return this._tableName;
  }

  public async write(payload: PutCommandInput['Item']): Promise<PutCommandOutput> {
    return this._DbClient.send(new PutCommand({
      TableName: this._tableName,
      Item: { ...payload },
    }));
  }

  public async read(payload: GetCommandInput['Key']): Promise<GetCommandOutput> {
    return this._DbClient.send(new GetCommand({
      TableName: this._tableName,
      Key: { ...payload },
    }));
  }

  public async delete(payload: DeleteCommandInput['Key']): Promise<DeleteCommandOutput> {
    return this._DbClient.send(new DeleteCommand({
      TableName: this._tableName,
      Key: { ...payload },
    }));
  }

  public async query(payload: Omit<QueryCommandInput, 'TableName'>): Promise<QueryCommandOutput> {
    return this._DbClient.send(new QueryCommand({
      TableName: this._tableName,
      ...payload,
    }));
  }
}
