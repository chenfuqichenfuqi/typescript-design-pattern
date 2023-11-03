import { DatabaseSingleton } from "./DataBaseSingleton";

const main = () => {
  const database = DatabaseSingleton.getInstance();
  database.insert("somewhere");

  console.log("-----------------------");

  const database2 = DatabaseSingleton.getInstance();
  database2.insert("otherwhere");
};
main();
