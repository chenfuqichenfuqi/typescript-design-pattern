export abstract class HandlerAbstract {
  protected nextHandler: HandlerAbstract;

  public setNext(next: HandlerAbstract): void {
    this.nextHandler = next;
  }

  public abstract handler(): void;
  protected abstract play(): string;
}
