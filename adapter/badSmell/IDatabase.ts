export abstract class IDatabase {
  public abstract query(): void;
  public abstract connect(): void;
}
