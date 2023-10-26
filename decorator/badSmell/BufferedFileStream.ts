import { FileStream } from "./FileStream";

export class BufferedFileStream extends FileStream {
  public read(): void {
    console.log("BufferedFileStream: read");
    super.read();
  }

  public seek(): void {
    console.log("BufferedFileStream: seek");
    super.seek();
  }

  public write(): void {
    console.log("BufferedFileStream: write");
    super.write();
  }
}
