import { AudioPlayer } from "./AudioPlayer";

const main = () => {
  const audioPlayer = new AudioPlayer();
  audioPlayer.play();
  audioPlayer.play();
  audioPlayer.pause();
  audioPlayer.stop();
};
main();
