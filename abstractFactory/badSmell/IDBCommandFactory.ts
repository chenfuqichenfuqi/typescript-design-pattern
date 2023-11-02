import { IDBCommand } from "./IDBCommand";

export abstract class IDBCommandFactory {
  public abstract createCommand(): IDBCommand;
}
