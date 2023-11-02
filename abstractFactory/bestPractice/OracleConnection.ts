import { IDBConnection } from "./IDBConnection";

export class OracleConnection extends IDBConnection {
  public executeConnect(): void {
    console.log("Oracle connection created");
  }
}
