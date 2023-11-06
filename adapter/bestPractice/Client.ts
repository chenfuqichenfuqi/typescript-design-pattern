import { IDatabase } from "./IDatabase";

export class Client {
  constructor(private _database: IDatabase) {}

  public execute() {
    console.log("Client->execute");

    this._database.connect();
    this._database.query();
  }
}
