export abstract class MessagerAbstract {
  public abstract login(): void;
  public abstract sendMessage(): void;
  public abstract sendPicture(): void;

  public abstract playSound(): void;
  public abstract drawShape(): void;
  public abstract writeText(): void;
  public abstract connect(): void;
}
