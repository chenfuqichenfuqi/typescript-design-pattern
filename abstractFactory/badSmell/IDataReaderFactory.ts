import { IDataReader } from "./IDataReader";

export abstract class IDataReaderFactory {
  public abstract createDataReader(): IDataReader;
}
