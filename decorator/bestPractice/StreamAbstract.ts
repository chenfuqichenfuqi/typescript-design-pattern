export abstract class StreamAbstract {
  public abstract read(): void;
  public abstract seek(): void;
  public abstract write(): void;
}
