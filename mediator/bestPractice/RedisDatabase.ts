import { DatabaseAbstract } from "./DatabaseAbstract";

export class RedisDatabase extends DatabaseAbstract {
  private _dataList: string[] = [];

  addData(data: string): void {
    console.log(`Redis add data: ${data}`);
    this.syncData(data);
    this.mediator.sync("redis", data);
  }

  syncData(data: string): void {
    console.log(`Redis sync data: ${data}`);
    this._dataList.push(data);
  }

  public cache(): void {
    console.log("Redis data : ", this._dataList.toString());
  }
}
