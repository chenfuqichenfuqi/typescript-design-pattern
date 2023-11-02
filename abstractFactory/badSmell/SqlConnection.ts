import { IDBConnection } from "./IDBConnection";

export class SqlConnection extends IDBConnection {
  public executeConnect(): void {
    console.log("Sql connection created");
  }
}
