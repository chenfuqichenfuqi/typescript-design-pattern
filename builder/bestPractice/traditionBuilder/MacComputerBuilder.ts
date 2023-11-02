import { Computer } from "./Computer";
import { IComputerBuilder } from "./IComputerBuilder";

export class MacComputerBuilder extends IComputerBuilder {
  private computer: Computer;

  constructor(cpu: string, ram: string) {
    super();
    this.computer = new Computer(cpu, ram);
  }

  public setUsbCount(): void {
    this.computer.setUsbCount(2);
  }

  public setKeyboard(): void {
    this.computer.setKeyboard("mac keyboard");
  }

  public setDisplay(): void {
    this.computer.setDisplay("mac display");
  }

  public getComputer(): Computer {
    return this.computer;
  }
}
