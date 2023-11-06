import { Client } from "./Client";
import { MySQLDatabase } from "./MySQLDatabase";
import { OracleDatabase } from "./OracleDatabase";

const main = () => {
  const mysql = new MySQLDatabase();
  let client = new Client(mysql);
  client.execute();

  console.log("------------------------");

  const oracle = new OracleDatabase();
  client = new Client(oracle);
  client.execute();
};
main();
