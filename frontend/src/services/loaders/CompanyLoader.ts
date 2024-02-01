import { json } from "react-router-dom";
import { CompanyParamsType } from "../../interfaces/Params";

export default async function CompanyLoader({ params }: CompanyParamsType) {
  const id = params.companyId;
  const company = await fetch(`http://localhost:5050/company/` + id);
  const employee = await fetch(`http://localhost:5050/employee/` + id);
  const service = await fetch(`http://localhost:5050/service/` + id);
  const companyReservations = await fetch(`http://localhost:5050/reservation/company/` + id);
  

  if (!company.ok && !employee.ok && !service.ok) {
    return json({ message: "Could not fetch company.", status: 500 });
  } else {
    const emp: EmployeesType = await employee.json()
    const serv: ServicesType = await service.json()
    const comp: CompaniesType = await company.json();
    const reserv = await companyReservations.json()
    const resData = {
      company: comp.company,
      service: serv.service,
      employee: emp.employee,
      reservation: reserv.reservation,
    }
    return resData;
  }
}
