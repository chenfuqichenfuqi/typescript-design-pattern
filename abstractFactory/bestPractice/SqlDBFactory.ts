import { SqlCommand } from "./SqlCommand";
import { SqlConnection } from "./SqlConnection";
import { SqlDataReader } from "./SqlDataReader";
import { IDBFactory } from "./IDBFactory";

export class SqlDBFactory extends IDBFactory {
  createConnection() {
    return new SqlConnection();
  }
  createCommand() {
    return new SqlCommand();
  }
  createDataReader() {
    return new SqlDataReader();
  }
}
