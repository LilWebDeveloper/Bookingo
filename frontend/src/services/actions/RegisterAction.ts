import { redirect } from "react-router-dom";

export default async function registerAction({ request }: RequestType) {
    const data: FormData = await request.formData();
    const authData = {
      login: data.get("login"),
      password: data.get("password"),
    };
  
    const response = await fetch(`http://localhost:5050/user/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });
  
    if (!response.ok) {
      throw new Error("Could not authenticate user!");
    }
  
    return redirect('/');
  }