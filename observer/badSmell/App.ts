import { customer } from "./customer";
import { otherCustomer } from "./otherCustomer";
import { goods } from "./goods";
import { total, purchaseTime } from "./calcGoods";
const main = () => {
  total(goods)(customer);
  purchaseTime(customer);
  total(goods)(otherCustomer);
  purchaseTime(otherCustomer);
  console.log(`goods.price===100,customer===`, customer);
  console.log(`goods.price===100,otherCustomer===`, otherCustomer);
  console.log(`------------------`);
  goods.price = 200;
  total(goods)(customer);
  purchaseTime(customer);
  total(goods)(otherCustomer);
  purchaseTime(otherCustomer);
  console.log(`goods.price===200,customer===`, customer);
  console.log(`goods.price===200,otherCustomer===`, otherCustomer);
};

main();
