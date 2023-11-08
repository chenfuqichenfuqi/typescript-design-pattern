import { Boy } from "./Boy";
import { Caretaker } from "./Caretaker";

const main = () => {
  const boy = new Boy();
  const caretaker = new Caretaker();

  boy.setState("good");
  caretaker.setMemento(boy.createMemento());
  console.log(boy.getState(), "--------------");

  boy.changeState();
  console.log(boy.getState(), " --------------");

  boy.restoreMemento(caretaker.getMemento());
  console.log(boy.getState(), "--------------");
};
main();
