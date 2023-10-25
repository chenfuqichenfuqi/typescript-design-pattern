import { purchaseTime, total } from "./calcGoods";
import { goods } from "./goods";
import { Observer } from "./Observer";
import { Subject } from "./Subject";
import { customer } from "./customer";
import { otherCustomer } from "./otherCustomer";

const main = () => {
  const totalObserver = new Observer(total(goods));
  const purchaseTimeObserver = new Observer(purchaseTime);

  const subject = new Subject();
  subject.addObserver(totalObserver);
  subject.addObserver(purchaseTimeObserver);

  subject.notify(customer);
  subject.notify(otherCustomer);

  console.log(`goods.price===100,customer===`, customer);
  console.log(`goods.price===100,otherCustomer===`, otherCustomer);
  console.log(`------------------`);
  goods.price = 200;

  subject.notify(customer);
  subject.notify(otherCustomer);
  console.log(`goods.price===200,customer===`, customer);
  console.log(`goods.price===200,otherCustomer===`, otherCustomer);
};

main();
