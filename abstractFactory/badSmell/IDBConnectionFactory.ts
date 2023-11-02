import { IDBConnection } from "./IDBConnection";

export abstract class IDBConnectionFactory {
  public abstract createConnection(): IDBConnection;
}
