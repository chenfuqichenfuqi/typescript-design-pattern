import { OracleDBFactory } from "./OracleDBFactory";
import { SqlDBFactory } from "./SqlDBFactory";

const main = () => {
  const oracleDBFactory = new OracleDBFactory();
  const oracleConnect = oracleDBFactory.createConnection();
  const oracleCommand = oracleDBFactory.createCommand();

  oracleCommand.setConnection(oracleConnect);
  oracleCommand.executeCommand();

  const oracleDataReader = oracleDBFactory.createDataReader();

  oracleDataReader.setCommand(oracleCommand);
  oracleDataReader.executeRead();
  console.log("-------------------------------");
  const sqlDBFactory = new SqlDBFactory();
  const sqlConnect = sqlDBFactory.createConnection();
  const sqlCommand = sqlDBFactory.createCommand();

  sqlCommand.setConnection(sqlConnect);
  sqlCommand.executeCommand();

  const sqlDataReader = sqlDBFactory.createDataReader();

  sqlDataReader.setCommand(sqlCommand);
  sqlDataReader.executeRead();
};
main();
