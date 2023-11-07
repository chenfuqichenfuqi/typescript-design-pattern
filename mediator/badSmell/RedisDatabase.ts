import { IDatabase } from "./IDatabase";

export class RedisDatabase extends IDatabase {
  _dataList: string[] = [];

  public addData(data: string): void {
    console.log(`Redis add data: ${data}`);

    this.syncData(data);
  }

  public syncData(data: string): void {
    this._dataList.push(data);
    console.log(`Redis sync data: ${data}`);
  }

  public cache(): void {
    console.log("Redis data : ", this._dataList.toString());
  }
}
