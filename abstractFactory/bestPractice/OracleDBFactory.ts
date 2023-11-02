import { OracleCommand } from "./OracleCommand";
import { OracleConnection } from "./OracleConnection";
import { OracleDataReader } from "./OracleDataReader";
import { IDBFactory } from "./IDBFactory";

export class OracleDBFactory extends IDBFactory {
  createConnection() {
    return new OracleConnection();
  }
  createCommand() {
    return new OracleCommand();
  }
  createDataReader() {
    return new OracleDataReader();
  }
}
