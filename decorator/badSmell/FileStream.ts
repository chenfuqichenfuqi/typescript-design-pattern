import { StreamAbstract } from "./StreamAbstract";

export class FileStream extends StreamAbstract {
  public read(): void {
    console.log("FileStream: read");
  }

  public seek(): void {
    console.log("FileStream: seek");
  }

  public write(): void {
    console.log("FileStream: write");
  }
}
