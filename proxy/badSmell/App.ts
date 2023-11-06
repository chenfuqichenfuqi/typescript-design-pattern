import { UserService } from "./UserService";
const main = async () => {
  const user = new UserService();
  //判断方法调用时间
  const start = Date.now();
  user.login("username", "password");
  const end = Date.now();
  console.log(`login time: ${end - start}`);
  //判断方法调用时间
  const start1 = Date.now();
  await user.sign();
  const end1 = Date.now();
  console.log(`sign time: ${end1 - start1}`);
};
main();
