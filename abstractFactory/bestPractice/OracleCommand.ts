import { IDBCommand } from "./IDBCommand";
import { IDBConnection } from "./IDBConnection";

export class OracleCommand extends IDBCommand {
  public executeCommand(): void {
    console.log("Oracle command executed.");
  }
  public setConnection(connect: IDBConnection): void {
    console.log("Oracle connection set.");
  }
}
