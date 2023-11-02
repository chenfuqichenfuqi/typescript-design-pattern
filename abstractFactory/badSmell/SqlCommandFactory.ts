import { IDBCommand } from "./IDBCommand";
import { IDBCommandFactory } from "./IDBCommandFactory";
import { SqlCommand } from "./SqlCommand";

export class SqlCommandFactory extends IDBCommandFactory {
  public createCommand(): IDBCommand {
    return new SqlCommand();
  }
}
