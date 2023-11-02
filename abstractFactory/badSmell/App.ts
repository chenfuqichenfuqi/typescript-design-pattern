import { OracleCommandFactory } from "./OracleCommandFactory";
import { OracleConnectionFactory } from "./OracleConnectionFactory";
import { OracleDataReaderFactory } from "./OracleDataReaderFactory";
import { SqlCommandFactory } from "./SqlCommandFactory";
import { SqlConnectionFactory } from "./SqlConnectionFactory";
import { SqlDataReaderFactory } from "./SqlDataReaderFactory";

const main = () => {
  const oracleConnect = new OracleConnectionFactory().createConnection();
  const oracleCommand = new OracleCommandFactory().createCommand();

  oracleCommand.setConnection(oracleConnect);
  oracleCommand.executeCommand();

  const oracleDataReader = new OracleDataReaderFactory().createDataReader();

  oracleDataReader.setCommand(oracleCommand);
  oracleDataReader.executeRead();

  console.log("-------------------------------");

  const sqlConnect = new SqlConnectionFactory().createConnection();
  const sqlCommand = new SqlCommandFactory().createCommand();

  sqlCommand.setConnection(sqlConnect);
  sqlCommand.executeCommand();

  const SqlDataReader = new SqlDataReaderFactory().createDataReader();

  SqlDataReader.setCommand(sqlCommand);
  SqlDataReader.executeRead();
};
main();
