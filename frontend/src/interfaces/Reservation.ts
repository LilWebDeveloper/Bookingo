interface ReservationType {
  companyId: CompanyType;
  date: string;
  employeeId: EmployeeType;
  serviceId: ServiceType;
  userId: string;
  _id: string;
}

interface Reservations {
  date?: string;
  _id?: string;
}

interface ReservationsType {
  reservation: ReservationType[];
}

interface ReservationForm {
  employees: EmployeeType[];
  services: ServiceType[];
  reservations: ReservationType[];
}
