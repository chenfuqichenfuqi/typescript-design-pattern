import { MemoryStream } from "./MemoryStream";

export class BufferedMemoryStream extends MemoryStream {
  public read(): void {
    console.log("BufferedMemoryStream: read");
    super.read();
  }

  public seek(): void {
    console.log("BufferedMemoryStream: seek");
    super.seek();
  }

  public write(): void {
    console.log("BufferedMemoryStream: write");
    super.write();
  }
}
