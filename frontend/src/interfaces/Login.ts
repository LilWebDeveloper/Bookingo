export interface LoginType {
  employeeId: string;
  message: string;
  name: string;
  status: number;
  token: string;
}

export interface LoginForm {
    login: string,
    password: string,
}