import { IComputerBuilder } from "./IComputerBuilder";

export class ComputerDirector {
  public makeComputer(builder: IComputerBuilder): void {
    builder.setUsbCount();
    builder.setDisplay();
    builder.setKeyboard();
  }
}
