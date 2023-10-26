import { MemoryStream } from "./MemoryStream";

export class CryptoMemoryStream extends MemoryStream {
  public read(): void {
    console.log("CryptoMemoryStream: read");
    super.read();
  }

  public seek(): void {
    console.log("CryptoMemoryStream: seek");
    super.seek();
  }

  public write(): void {
    console.log("CryptoMemoryStream: write");
    super.write();
  }
}
