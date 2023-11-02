import { Computer } from "./Computer";
import { IComputerBuilder } from "./IComputerBuilder";

export class ComputerBuilder implements IComputerBuilder {
  usbCount?: number;
  keyboard?: string;
  display?: string;

  constructor(public cpu: string, public ram: string) {}

  public setUsbCount(usbCount: number) {
    this.usbCount = usbCount;
    return this;
  }
  public setKeyboard(keyboard: string) {
    this.keyboard = keyboard;
    return this;
  }
  public setDisplay(display: string) {
    this.display = display;
    return this;
  }
  build(): Computer {
    return new Computer(this);
  }
}
