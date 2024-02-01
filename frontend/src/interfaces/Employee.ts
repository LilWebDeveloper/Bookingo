interface EmployeeType {
  company: string;
  name: string;
  surname: string;
  _id: string;
}

interface EmployeesType {
  employee: EmployeeType[];
}
