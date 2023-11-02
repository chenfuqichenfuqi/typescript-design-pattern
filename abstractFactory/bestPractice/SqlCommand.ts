import { IDBCommand } from "./IDBCommand";
import { IDBConnection } from "./IDBConnection";

export class SqlCommand extends IDBCommand {
  public executeCommand(): void {
    console.log("Sql command executed.");
  }
  public setConnection(connect: IDBConnection): void {
    console.log("Sql connection set.");
  }
}
