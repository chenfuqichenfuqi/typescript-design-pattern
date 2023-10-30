import { BinarySplitterFactory } from "./BinarySplitterFactory";
import { ISplitter } from "./SplitterAbstract";
import { TextSplitterFactory } from "./TextSplitterFactory";

const main = () => {
  let splitter: ISplitter = new TextSplitterFactory().create();
  splitter.split();
  splitter = new BinarySplitterFactory().create();
  splitter.split();
};
main();
