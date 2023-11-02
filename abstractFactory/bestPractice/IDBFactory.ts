import { IDBCommand } from "./IDBCommand";
import { IDBConnection } from "./IDBConnection";
import { IDataReader } from "./IDataReader";

export abstract class IDBFactory {
  abstract createConnection(): IDBConnection;
  abstract createCommand(): IDBCommand;
  abstract createDataReader(): IDataReader;
}
