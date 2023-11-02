export class Computer {
  constructor(
    public cpu: string,
    public ram: string,
    public usbCount?: number,
    public keyboard?: string,
    public display?: string
  ) {}
}
