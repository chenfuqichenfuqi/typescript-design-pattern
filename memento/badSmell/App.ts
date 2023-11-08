import { Boy } from "./Boy";

const main = () => {
  const boy = new Boy();
  boy.setState("good");
  console.log(boy.getState(), "--------------");

  const backup = new Boy();
  backup.setState(boy.getState());

  boy.changeState();
  console.log(boy.getState(), " --------------");

  boy.setState(backup.getState());
  console.log(boy.getState(), "--------------");
};
main();
