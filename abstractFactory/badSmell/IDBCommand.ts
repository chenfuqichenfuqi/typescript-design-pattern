import { IDBConnection } from "./IDBConnection";

export abstract class IDBCommand {
  public abstract setConnection(connect: IDBConnection): void;
  public abstract executeCommand(): void;
}
