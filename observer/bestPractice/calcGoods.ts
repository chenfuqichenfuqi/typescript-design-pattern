import { TGoods } from "./goods";
import { TCustomer } from "./otherCustomer";

export const total = (data: TGoods) => (customer: TCustomer) => {
  if (!customer.VIP) return (customer.total = data.price * customer.quantity);
  else return (customer.total = data.price * data.discount * customer.quantity);
};

export const purchaseTime = (info: TCustomer) => (info.timeStamp = Date.now());
