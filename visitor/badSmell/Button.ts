import { IComponent } from "./IComponent";

export class Button extends IComponent {
  public addStyle(): void {
    console.log("Button: addStyle");
  }
  public addEvent(): void {
    console.log("Button: addEvent");
  }
}
