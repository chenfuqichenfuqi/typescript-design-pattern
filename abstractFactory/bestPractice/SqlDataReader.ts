import { IDBCommand } from "./IDBCommand";
import { IDataReader } from "./IDataReader";

export class SqlDataReader extends IDataReader {
  public setCommand(command: IDBCommand): void {
    console.log("Sql dataReader set command");
  }
  public executeRead(): void {
    console.log("Sql data reader");
  }
}
