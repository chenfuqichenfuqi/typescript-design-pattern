import { DecoratorStream } from "./DecoratorStream";
import { StreamAbstract } from "./StreamAbstract";

export class BufferedStream extends DecoratorStream {
  constructor(stream: StreamAbstract) {
    super(stream);
  }
  public read() {
    console.log("BufferedStream: read");
    this.stream.read();
  }
  public seek() {
    console.log("BufferedStream: seek");
    this.stream.seek();
  }
  public write() {
    console.log("BufferedStream: write");
    this.stream.write();
  }
}
