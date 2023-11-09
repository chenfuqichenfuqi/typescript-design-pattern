import { FinanceDepartment } from "./FinanceDepartment";
import { Headquarters } from "./Headquarters";
import { HumanResourceDepartment } from "./HumanResourceDepartment ";

const main = () => {
  const headquarters = new Headquarters();

  const finance = new FinanceDepartment();
  const hr = new HumanResourceDepartment();
  headquarters.addOrg(finance);
  headquarters.addOrg(hr);
  console.log("Organization");
  headquarters.showOrg();
  console.log("Duty");
  headquarters.displayDuty();
};
main();
