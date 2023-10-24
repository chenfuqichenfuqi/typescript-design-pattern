import { IUIComponentStrategy } from "./UIComponentStrategy";

export class SelectStrategy implements IUIComponentStrategy {
  render() {
    // 渲染下拉框
    console.log("render select");
  }
}
