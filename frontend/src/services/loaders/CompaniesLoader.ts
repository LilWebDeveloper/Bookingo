import { json } from "react-router-dom";

async function highRateCompanyLoader() {
  const response = await fetch("http://localhost:5050/company/highRate");

  if (!response.ok) {
    return json({ message: "Could not fetch companies", status: 500 });
  } else {
    const resData: CompanyType[] = await response.json();
    return resData
  }
}

async function hairdressersCompanyLoader() {
  const response = await fetch("http://localhost:5050/company/hairdressers");

  if (!response.ok) {
    return json({ message: "Could not fetch companies", status: 500 });
  } else {
    const resData: CompanyType[] = await response.json();
    return resData
  }
}

async function massagesCompanyLoader() {
  const response: Response = await fetch("http://localhost:5050/company/massages");

  if (!response.ok) {
    return json({ message: "Could not fetch companies", status: 500 });
  } else {
    const resData: CompanyType[] = await response.json();
    return resData
  }
}

async function beautySalonsLoader() {
  const response: Response = await fetch("http://localhost:5050/company/beautySalons");

  if (!response.ok) {
    return json({ message: "Could not fetch companies", status: 500 });
  } else {
    const resData: CompanyType[] = await response.json();
    return resData
  }
}

export {
  highRateCompanyLoader,
  hairdressersCompanyLoader,
  massagesCompanyLoader,
  beautySalonsLoader,
}