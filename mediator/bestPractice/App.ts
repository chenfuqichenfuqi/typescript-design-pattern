import { EsDatabase } from "./EsDatabase";
import { MysqlDatabase } from "./MysqlDatabase";
import { RedisDatabase } from "./RedisDatabase";
import { SyncMediator } from "./SyncMediator";

const main = () => {
  const syncMediator = new SyncMediator();
  const mysqlDatabase = new MysqlDatabase(syncMediator);
  const redisDatabase = new RedisDatabase(syncMediator);
  const esDatabase = new EsDatabase(syncMediator);

  syncMediator.setMysqlDatabase(mysqlDatabase);
  syncMediator.setRedisDatabase(redisDatabase);
  syncMediator.setEsDatabase(esDatabase);

  mysqlDatabase.addData("key1");
  mysqlDatabase.select();
  redisDatabase.cache();
  esDatabase.count();
  console.log("-----------------------------");

  redisDatabase.addData("key2");
  mysqlDatabase.select();
  redisDatabase.cache();
  esDatabase.count();
  console.log("-----------------------------");

  esDatabase.addData("key3");
  mysqlDatabase.select();
  redisDatabase.cache();
  esDatabase.count();
};
main();
