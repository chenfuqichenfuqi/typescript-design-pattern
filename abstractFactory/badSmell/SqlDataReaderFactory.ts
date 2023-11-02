import { IDataReader } from "./IDataReader";
import { IDataReaderFactory } from "./IDataReaderFactory";
import { SqlDataReader } from "./SqlDataReader";

export class SqlDataReaderFactory extends IDataReaderFactory {
  public createDataReader(): IDataReader {
    return new SqlDataReader();
  }
}
