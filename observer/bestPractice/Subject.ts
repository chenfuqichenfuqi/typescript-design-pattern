import { TCustomer } from "../badSmell/otherCustomer";
import { Observer } from "./Observer";

// 观察目标类
export class Subject {
  observerList: Observer[];
  constructor() {
    this.observerList = [];
  }
  addObserver(observer: Observer) {
    this.observerList.push(observer);
  }
  notify(params: TCustomer) {
    this.observerList.forEach((observer) => {
      observer.update(params);
    });
  }
}
