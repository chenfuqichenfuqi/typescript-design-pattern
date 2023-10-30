import { BinarySplitter } from "./BinarySplitter";
import { ISplitter } from "./SplitterAbstract";
import { SplitterFactoryAbstract } from "./SplitterFactoryAbstract";

export class BinarySplitterFactory extends SplitterFactoryAbstract {
  public create(): ISplitter {
    return new BinarySplitter();
  }
}
