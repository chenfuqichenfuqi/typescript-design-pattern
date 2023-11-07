import { IDatabase } from "./IDatabase";
import { MysqlDatabase } from "./MysqlDatabase";

export class EsDatabase extends IDatabase {
  _dataList: string[] = [];
  private _mysqlDatabase: MysqlDatabase;

  public addData(data: string): void {
    console.log(`Es add data : ${data}`);

    this.syncData(data);
    this._mysqlDatabase.syncData(data);
  }

  public syncData(data: string): void {
    this._dataList.push(data);
    console.log(`Es sync data : ${data}`);
  }

  public setMysqlDatabase(mysqlDatabase: MysqlDatabase): void {
    this._mysqlDatabase = mysqlDatabase;
  }

  public count(): void {
    console.log("Es data : ", this._dataList.toString());
  }
}
