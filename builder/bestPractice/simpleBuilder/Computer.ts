import { ComputerBuilder } from "./ComputerBuilder";

export class Computer {
  public cpu: string;
  public ram: string;
  public usbCount?: number;
  public keyboard?: string;
  public display?: string;
  constructor(computerBuilder: ComputerBuilder) {
    this.cpu = computerBuilder.cpu;
    this.ram = computerBuilder.ram;
    this.usbCount = computerBuilder.usbCount;
    this.keyboard = computerBuilder.keyboard;
    this.display = computerBuilder.display;
  }
}
