import { renderUIComponent } from "./renderUIComponent";
import { UIComponentEnum } from "./UIComponentEnum";
const main = () => {
  renderUIComponent(UIComponentEnum.BUTTON);
  renderUIComponent(UIComponentEnum.INPUT);
  renderUIComponent(UIComponentEnum.SELECT);
};
main();
