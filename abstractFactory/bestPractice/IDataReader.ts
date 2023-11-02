import { IDBCommand } from "./IDBCommand";

export abstract class IDataReader {
  public abstract setCommand(command: IDBCommand): void;
  public abstract executeRead(): void;
}
