import { Computer } from "./Computer";

export abstract class IComputerBuilder {
  public abstract setUsbCount(): void;
  public abstract setKeyboard(): void;
  public abstract setDisplay(): void;

  public abstract getComputer(): Computer;
}
