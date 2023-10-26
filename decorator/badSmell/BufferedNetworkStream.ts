import { NetworkStream } from "./NetworkStream";

export class BufferedNetworkStream extends NetworkStream {
  public read(): void {
    console.log("BufferedNetworkStream: read");
    super.read();
  }

  public seek(): void {
    console.log("BufferedNetworkStream: seek");
    super.seek();
  }

  public write(): void {
    console.log("BufferedNetworkStream: write");
    super.write();
  }
}
