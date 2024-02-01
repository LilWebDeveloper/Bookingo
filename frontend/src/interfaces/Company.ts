interface CompanyType {
  address: string;
  city: string;
  name: string;
  picture: string;
  rate: number;
  services: string;
  specialization: string;
  _id: string;
}

interface CompaniesType {
  company: CompanyType;
}

interface RecomendedCompany {
  companies: CompanyType[];
}

interface CompanyInfo {
  company: CompanyType;
  employee: EmployeeType[];
  reservation: ReservationType[]
  service: ServiceType[];
}
