import { SplitterAbstract } from "./SplitterAbstract";

export class TextSplitter extends SplitterAbstract {
  public split(): void {
    console.log("TextSplitter split");
  }
}
