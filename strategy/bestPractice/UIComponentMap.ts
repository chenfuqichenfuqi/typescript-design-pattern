import { ButtonStrategy } from "./ButtonStrategy";
import { InputStrategy } from "./InputStrategy";
import { SelectStrategy } from "./SelectStrategy";
import { IUIComponentStrategy } from "./UIComponentStrategy";

type UIComponentType = "button" | "input" | "select";

export const UIComponentMap = new Map<UIComponentType, IUIComponentStrategy>([
  ["button", new ButtonStrategy()],
  ["input", new InputStrategy()],
  ["select", new SelectStrategy()],
]);
