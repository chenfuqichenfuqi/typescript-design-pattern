export class Computer {
  public usbCount?: number;
  public keyboard?: string;
  public display?: string;
  constructor(public cpu: string, public ram: string) {}
  setUsbCount(usbCount: number) {
    this.usbCount = usbCount;
  }

  setKeyboard(keyboard: string) {
    this.keyboard = keyboard;
  }

  setDisplay(display: string) {
    this.display = display;
  }
}
