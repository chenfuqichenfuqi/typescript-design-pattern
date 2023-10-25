import { TGoods } from "./goods";
import { TCustomer } from "./otherCustomer";

// export const total = (customer: TCustomer) => {
//   if (!customer.VIP)
//     return (data: TGoods) => (customer.total = data.price * customer.quantity);
//   else
//     return (data: TGoods) =>
//       (customer.total = data.price * data.discount * customer.quantity);
// };

export const total = (data: TGoods) => {
  return (customer: TCustomer) => {
    if (!customer.VIP) return (customer.total = data.price * customer.quantity);
    else
      return (customer.total = data.price * data.discount * customer.quantity);
  };
};

export const purchaseTime = (info: TCustomer) => (info.timeStamp = Date.now());
