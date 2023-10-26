import { StreamAbstract } from "./StreamAbstract";

export class MemoryStream extends StreamAbstract {
  public read(): void {
    console.log("MemoryStream: read");
  }

  public seek(): void {
    console.log("MemoryStream: seek");
  }

  public write(): void {
    console.log("MemoryStream: write");
  }
}
