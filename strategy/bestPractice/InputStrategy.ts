import { IUIComponentStrategy } from "./UIComponentStrategy";

export class InputStrategy implements IUIComponentStrategy {
  render() {
    // 渲染输入框
    console.log("render input");
  }
}
