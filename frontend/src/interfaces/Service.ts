interface ServiceType {
  _id: string;
  company: CompanyType;
  name: string;
  price: number;
  time: number;
}

interface ServicesType {
  service: ServiceType[];
}
