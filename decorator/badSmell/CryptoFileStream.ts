import { FileStream } from "./FileStream";

export class CryptoFileStream extends FileStream {
  public read(): void {
    console.log("CryptoFileStream: read");
    super.read();
  }

  public seek(): void {
    console.log("CryptoFileStream: seek");
    super.seek();
  }

  public write(): void {
    console.log("CryptoFileStream: write");
    super.write();
  }
}
