import { BufferedFileStream } from "./BufferedFileStream";
import { BufferedMemoryStream } from "./BufferedMemoryStream";
import { BufferedNetworkStream } from "./BufferedNetworkStream";
import { CryptoFileStream } from "./CryptoFileStream";
import { CryptoMemoryStream } from "./CryptoMemoryStream";
import { CryptoNetworkStream } from "./CryptoNetworkStream";

const main = () => {
  const cryptoFileStream = new CryptoFileStream();
  const cryptoMemoryStream = new CryptoMemoryStream();
  const cryptoNetworkStream = new CryptoNetworkStream();

  const bufferedFileStream = new BufferedFileStream();
  const bufferedMemoryStream = new BufferedMemoryStream();
  const bufferedNetworkStream = new BufferedNetworkStream();

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
