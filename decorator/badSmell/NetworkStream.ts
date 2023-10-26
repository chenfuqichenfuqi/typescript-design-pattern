import { StreamAbstract } from "./StreamAbstract";

export class NetworkStream extends StreamAbstract {
  public read(): void {
    console.log("NetworkStream: read");
  }

  public seek(): void {
    console.log("NetworkStream: seek");
  }

  public write(): void {
    console.log("NetworkStream: write");
  }
}
