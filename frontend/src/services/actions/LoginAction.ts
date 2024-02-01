import { LoginType } from "../../interfaces/Login";
import {setExpirationToLocalStorage, setTokenToLocalStorage} from "../../utils/Token"

export default async function loginAction({ request }: any) {
    const data: FormData = await request.formData();
    const authData = {
      login: data.get("login"),
      password: data.get("password"),
    };
  
    const response = await fetch(`http://localhost:5050/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });
  
    if (response.status === 422 || response.status === 401) {
      return response;
    }
  
    if (!response.ok) {
      throw new Error("Could not authenticate user!");
    }
  
    const resData: LoginType = await response.json();
    console.log(resData)
    const token = resData.token;
  
    setTokenToLocalStorage(token);
    setExpirationToLocalStorage()
  
    return resData;
  }