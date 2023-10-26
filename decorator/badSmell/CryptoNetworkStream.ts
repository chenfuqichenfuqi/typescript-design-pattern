import { NetworkStream } from "./NetworkStream";

export class CryptoNetworkStream extends NetworkStream {
  public read(): void {
    console.log("CryptoNetworkStream: read");
    super.read();
  }

  public seek(): void {
    console.log("CryptoNetworkStream: seek");
    super.seek();
  }

  public write(): void {
    console.log("CryptoNetworkStream: write");
    super.write();
  }
}
