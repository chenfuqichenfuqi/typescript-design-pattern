import { DecoratorStream } from "./DecoratorStream";
import { StreamAbstract } from "./StreamAbstract";

export class CryptoStream extends DecoratorStream {
  constructor(protected stream: StreamAbstract) {
    super(stream);
  }

  public read(): void {
    console.log("CryptoStream: read");
    this.stream.read();
  }

  public seek(): void {
    console.log("CryptoStream: seek");
    this.stream.seek();
  }

  public write(): void {
    console.log("CryptoStream: write");
    this.stream.write();
  }
}
