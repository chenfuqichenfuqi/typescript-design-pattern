import { Database } from "./Database";

const main = () => {
  const database = new Database();
  database.insert("somewhere");

  console.log("-----------------------");

  const database2 = new Database();
  database2.insert("otherwhere");
};
main();
