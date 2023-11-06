import { IDatabase } from "./IDatabase";
import { OracleDatabase } from "./OracleDatabase";
type Idatabase = OracleDatabase | IDatabase;
export class Client {
  constructor(private _database: Idatabase) {}

  public execute() {
    console.log("Client->execute");
    if (this._isOracleDatabase(this._database)) {
      this._database.open();
      this._database.find();
    } else if (this._isIDatabase(this._database)) {
      this._database.connect();
      this._database.query();
    }
  }

  private _isOracleDatabase(database: Idatabase): database is OracleDatabase {
    return this._database instanceof OracleDatabase;
  }

  private _isIDatabase(database: Idatabase): database is IDatabase {
    return this._database instanceof IDatabase;
  }
}
