import { IDatabase } from "./IDatabase";

export class MySQLDatabase extends IDatabase {
  public query(): void {
    console.log("MySQL->query");
  }

  public connect(): void {
    console.log("MySQL->connect");
  }
}
