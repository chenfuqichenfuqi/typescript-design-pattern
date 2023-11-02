import { IDataReader } from "./IDataReader";
import { IDataReaderFactory } from "./IDataReaderFactory";
import { OracleDataReader } from "./OracleDataReader";

export class OracleDataReaderFactory extends IDataReaderFactory {
  public createDataReader(): IDataReader {
    return new OracleDataReader();
  }
}
