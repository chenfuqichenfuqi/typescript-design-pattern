import { Client } from "./Client";
import { MySQLDatabase } from "./MySQLDatabase";
import { OracleDatabaseAdapter } from "./OracleDatabaseAdapter";

const main = () => {
  const mysql = new MySQLDatabase();
  let clinet = new Client(mysql);
  clinet.execute();
  console.log("------------------------");

  const oracle = new OracleDatabaseAdapter();
  clinet = new Client(oracle);
  clinet.execute();
};
main();
