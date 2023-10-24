import { IUIComponentStrategy } from "./UIComponentStrategy";

export class ButtonStrategy implements IUIComponentStrategy {
  render() {
    // 渲染按钮
    console.log("render button");
  }
}
