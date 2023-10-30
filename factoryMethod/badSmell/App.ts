import { BinarySplitter } from "./BinarySplitter";
import { ISplitter } from "./SplitterAbstract";
import { TextSplitter } from "./TextSplitter";

const main = () => {
  const textSplitter: ISplitter = new TextSplitter();
  textSplitter.split();
  const binarySplitter: ISplitter = new BinarySplitter();
  binarySplitter.split();
};

main();
