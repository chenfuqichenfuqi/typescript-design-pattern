import { DatabaseAbstract } from "./DatabaseAbstract";

export class MysqlDatabase extends DatabaseAbstract {
  private _dataList: string[] = [];

  addData(data: string): void {
    console.log(`Mysql add data: ${data}`);
    this.syncData(data);
    this.mediator.sync("mysql", data);
  }

  syncData(data: string): void {
    console.log(`Mysql sync data: ${data}`);
    this._dataList.push(data);
  }

  public select(): void {
    console.log("Mysql data : ", this._dataList.toString());
  }
}
