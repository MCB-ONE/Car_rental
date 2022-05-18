import { Icon } from "../icon";

export type Value = number | string | boolean;

export interface ControlItem {
  key?: string;
  value: Value;
  label: string;
  icon?: Icon;
}
