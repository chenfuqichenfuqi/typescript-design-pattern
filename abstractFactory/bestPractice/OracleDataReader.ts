import { IDBCommand } from "./IDBCommand";
import { IDataReader } from "./IDataReader";

export class OracleDataReader extends IDataReader {
  public setCommand(command: IDBCommand): void {
    console.log("Oracle dataReader set command");
  }

  public executeRead(): void {
    console.log("Oracle data reader");
  }
}
