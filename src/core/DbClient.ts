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
import ProjectConfig from '../utils/ProjectConfig';

export type tableNames = 'refugehulman' | 'refugehulman-contact'

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
  private DbClient: DynamoDBDocumentClient;

  private tableName = 'refugehulman';

  constructor() {
    const dynamoClient = new DynamoDBClient({ region: ProjectConfig.REGION });
    this.DbClient = DynamoDBDocumentClient.from(dynamoClient, translateConfig);
  }

  public async write(payload: PutCommandInput['Item']): Promise<PutCommandOutput> {
    return this.DbClient.send(new PutCommand({
      TableName: this.tableName,
      Item: { ...payload },
    }));
  }

  public async read(payload: GetCommandInput['Key']): Promise<GetCommandOutput> {
    return this.DbClient.send(new GetCommand({
      TableName: this.tableName,
      Key: { ...payload },
    }));
  }

  public async delete(payload: DeleteCommandInput['Key']): Promise<DeleteCommandOutput> {
    return this.DbClient.send(new DeleteCommand({
      TableName: this.tableName,
      Key: { ...payload },
    }));
  }

  public async query(payload: Omit<QueryCommandInput, 'TableName'>): Promise<QueryCommandOutput> {
    return this.DbClient.send(new QueryCommand({
      TableName: this.tableName,
      ...payload,
    }));
  }
}
