import { EsDatabase } from "./EsDatabase";
import { MysqlDatabase } from "./MysqlDatabase";
import { RedisDatabase } from "./RedisDatabase";

const main = () => {
  const mysqlDatabase = new MysqlDatabase();
  const redisDatabase = new RedisDatabase();
  const esDatabase = new EsDatabase();

  mysqlDatabase.setRedisDatabase(redisDatabase);
  mysqlDatabase.setEsDatabase(esDatabase);
  esDatabase.setMysqlDatabase(mysqlDatabase);

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
