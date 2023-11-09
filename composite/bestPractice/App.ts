import { Company } from "./Company";
import { FinanceDepartment } from "./FinanceDepartment";
import { HumanResourceDepartment } from "./HumanResourceDepartment ";

const main = () => {
  const headquarters = new Company("Headquarters");
  headquarters.addOrg(new FinanceDepartment("Headquarters Finance"));
  headquarters.addOrg(
    new HumanResourceDepartment("Headquarters HumanResource")
  );

  const areaCompany = new Company("Area Company");
  areaCompany.addOrg(new FinanceDepartment("Area Company Finance"));
  areaCompany.addOrg(new HumanResourceDepartment("Area Company HumanResource"));

  const otherCompany = new Company("Other Company");
  otherCompany.addOrg(new FinanceDepartment("Other Company Finance"));
  otherCompany.addOrg(
    new HumanResourceDepartment("Other Company HumanResource")
  );

  headquarters.addOrg(areaCompany);
  headquarters.addOrg(otherCompany);

  headquarters.showOrg();
};

main();
