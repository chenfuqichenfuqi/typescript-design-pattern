import { IDatabase } from "./IDatabase";
import { OracleDatabase } from "./OracleDatabase";
export class OracleDatabaseAdapter extends IDatabase {
  private _oracleDatabase: OracleDatabase = new OracleDatabase();

  public connect(): void {
    this._oracleDatabase.open();
  }

  public query(): void {
    this._oracleDatabase.find();
  }
}
