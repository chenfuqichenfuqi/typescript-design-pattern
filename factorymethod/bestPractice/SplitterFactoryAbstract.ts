import { ISplitter } from "./SplitterAbstract";

export abstract class SplitterFactoryAbstract {
  public abstract create(): ISplitter;
}
