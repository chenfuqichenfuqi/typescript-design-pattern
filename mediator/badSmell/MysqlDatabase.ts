import { EsDatabase } from "./EsDatabase";
import { IDatabase } from "./IDatabase";
import { RedisDatabase } from "./RedisDatabase";

export class MysqlDatabase extends IDatabase {
  private _redisDatabase: RedisDatabase;
  private _esDatabase: EsDatabase;
  _dataList: string[] = [];

  public addData(data: string): void {
    console.log(`Mysql add data: ${data}`);

    this.syncData(data);
    this._redisDatabase.syncData(data);
    this._esDatabase.syncData(data);
  }

  public syncData(data: string): void {
    this._dataList.push(data);
    console.log(`Mysql sync data: ${data}`);
  }

  public setRedisDatabase(redisDatabase: RedisDatabase): void {
    this._redisDatabase = redisDatabase;
  }

  public setEsDatabase(esDatabase: EsDatabase): void {
    this._esDatabase = esDatabase;
  }

  public select(): void {
    console.log("Mysql data : ", this._dataList.toString());
  }
}
