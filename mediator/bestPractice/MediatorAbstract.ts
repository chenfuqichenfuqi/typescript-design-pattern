import { EsDatabase } from "./EsDatabase";
import { MysqlDatabase } from "./MysqlDatabase";
import { RedisDatabase } from "./RedisDatabase";

export abstract class MediatorAbstract {
  protected mysqlDatabase: MysqlDatabase;
  protected redisDatabase: RedisDatabase;
  protected esDatabase: EsDatabase;

  setMysqlDatabase(mysqlDatabase: MysqlDatabase): void {
    this.mysqlDatabase = mysqlDatabase;
  }

  setRedisDatabase(redisDatabase: RedisDatabase): void {
    this.redisDatabase = redisDatabase;
  }

  setEsDatabase(esDatabase: EsDatabase): void {
    this.esDatabase = esDatabase;
  }

  abstract sync(databaseName: "mysql" | "redis" | "es", data: string): void;
}
