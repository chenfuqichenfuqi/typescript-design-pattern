import { IDBCommand } from "./IDBCommand";
import { IDBCommandFactory } from "./IDBCommandFactory";
import { OracleCommand } from "./OracleCommand";

export class OracleCommandFactory extends IDBCommandFactory {
  public createCommand(): IDBCommand {
    return new OracleCommand();
  }
}
