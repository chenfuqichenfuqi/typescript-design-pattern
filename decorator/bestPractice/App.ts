import { BufferedStream } from "./BufferedStream";
import { CryptoStream } from "./CryptoStream";
import { FileStream } from "./FileStream";
import { MemoryStream } from "./MemoryStream";
import { NetworkStream } from "./NetworkStream";

const main = () => {
  const fileStream = new FileStream();
  const memoryStream = new MemoryStream();
  const networkStream = new NetworkStream();

  const cryptoFileStream = new CryptoStream(fileStream);
  const cryptoMemoryStream = new CryptoStream(memoryStream);
  const cryptoNetworkStream = new CryptoStream(networkStream);

  const bufferedFileStream = new BufferedStream(fileStream);
  const bufferedMemoryStream = new BufferedStream(memoryStream);
  const bufferedNetworkStream = new BufferedStream(networkStream);
  [
    cryptoFileStream,
    cryptoMemoryStream,
    cryptoNetworkStream,
    bufferedFileStream,
    bufferedMemoryStream,
    bufferedNetworkStream,
  ].forEach((stream) => {
    stream.read();
    stream.seek();
    stream.write();
    console.log("---------------------------");
  });
};
main();
