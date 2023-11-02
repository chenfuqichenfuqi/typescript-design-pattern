import { IDBConnection } from "./IDBConnection";
import { IDBConnectionFactory } from "./IDBConnectionFactory";
import { OracleConnection } from "./OracleConnection";

export class OracleConnectionFactory extends IDBConnectionFactory {
  public createConnection(): IDBConnection {
    return new OracleConnection();
  }
}
