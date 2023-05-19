import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../service/api";

type User = {
	id: string;
	name: string;
	image_url: string;
};

export function AuthProvider() {
	const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: String){
    const response = await api.post<User>("login",{
      email: email,
      password: password
    })

    const user = response.data;

    localStorage.setItem("@user:id", user.id);

    setUser(user);
  }

  
}