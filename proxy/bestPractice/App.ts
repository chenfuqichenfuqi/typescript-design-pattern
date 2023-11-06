import { DynamicProxy } from "./dynamicProxy/DynamicProxy";
import { UserService } from "./dynamicProxy/UserService";
import { UserServiceProxy } from "./staticProxy/UserServiceProxy";
const main = async () => {
  //static
  const userProxy = new UserServiceProxy();
  userProxy.login("username", "password");
  await userProxy.sign();

  console.log("--------dynamic---------");

  //dynamic
  const user = new UserService();
  const dynamicProxy = new DynamicProxy().createLogProxy(user);
  dynamicProxy.login("username", "password");
  await dynamicProxy.sign();
};

main();
