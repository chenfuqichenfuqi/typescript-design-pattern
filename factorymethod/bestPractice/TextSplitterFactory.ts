import { ISplitter } from "./SplitterAbstract";
import { SplitterFactoryAbstract } from "./SplitterFactoryAbstract";
import { TextSplitter } from "./TextSplitter";

export class TextSplitterFactory extends SplitterFactoryAbstract {
  public create(): ISplitter {
    return new TextSplitter();
  }
}
