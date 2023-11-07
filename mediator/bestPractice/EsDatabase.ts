import { DatabaseAbstract } from "./DatabaseAbstract";

export class EsDatabase extends DatabaseAbstract {
  private _dataList: string[] = [];

  addData(data: string): void {
    console.log(`Es add data: ${data}`);
    this.syncData(data);
    this.mediator.sync("es", data);
  }

  syncData(data: string): void {
    console.log(`Es sync data: ${data}`);
    this._dataList.push(data);
  }

  public count(): void {
    console.log("Es data : ", this._dataList.toString());
  }
}
