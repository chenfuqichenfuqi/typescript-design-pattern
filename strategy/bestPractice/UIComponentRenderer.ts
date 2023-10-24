import { IUIComponentStrategy } from "./UIComponentStrategy";

export class UIComponentRenderer {
  private strategy: IUIComponentStrategy;

  setStrategy(strategy: IUIComponentStrategy) {
    this.strategy = strategy;
  }

  render() {
    this.strategy.render();
  }
}
