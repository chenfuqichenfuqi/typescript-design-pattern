import { DeliverySystem } from "./DeliverySystem";
import { OrderSystem } from "./OrderSystem";
import { PaymentSystem } from "./PaymentSystem";

export class ReportFacade {
  public generateReport() {
    const orderSystem = new OrderSystem();
    const orderNumber = orderSystem.getOrderNum();

    const paymentSystem = new PaymentSystem(orderSystem);
    const orderAccount = paymentSystem.getOrderAccount();

    const deliverySystem = new DeliverySystem();
    const deliverytime = deliverySystem.getDeliverytime();

    console.log(`orderNumber: ${orderNumber}`);
    console.log(`orderAccount: ${orderAccount}`);
    console.log(`deliverytime: ${deliverytime}`);
  }
}
