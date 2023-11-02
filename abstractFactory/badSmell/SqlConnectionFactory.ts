import { IDBConnection } from "./IDBConnection";
import { IDBConnectionFactory } from "./IDBConnectionFactory";
import { SqlConnection } from "./SqlConnection";

export class SqlConnectionFactory extends IDBConnectionFactory {
  public createConnection(): IDBConnection {
    return new SqlConnection();
  }
}
