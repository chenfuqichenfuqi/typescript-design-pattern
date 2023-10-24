import { UIComponentEnum } from "./UIComponentEnum";

export const renderUIComponent = (component: UIComponentEnum) => {
  if (component === UIComponentEnum.BUTTON) {
    // 渲染按钮
    console.log("render button");
  } else if (component === UIComponentEnum.INPUT) {
    // 渲染输入框
    console.log("render input");
  } else if (component === UIComponentEnum.SELECT) {
    // 渲染下拉框
    console.log("render select");
  }
};
