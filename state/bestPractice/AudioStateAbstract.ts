import { AudioPlayer } from "./AudioPlayer";

export abstract class AudioStateAbstract {
  constructor(public audioPlayer: AudioPlayer) {}
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}
