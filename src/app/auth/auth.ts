import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import { decodedUser } from "../types/types";
import { useEffect, useState } from "react";

export const setUserLocalStorage = (token: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    if (token == null || token == undefined) {
      localStorage.removeItem("accessToken");
      redirect("/");
    } else {
      localStorage.setItem("accessToken", token);
    }
  }
};

export const getUserLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const token = localStorage.getItem("accessToken");
    return token;
  }
  return null;
};
export const removeUserLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem("accessToken");
    redirect("/login");
  }
};

export const verifyToken = (token: string) => {
  const decodedUser: decodedUser = jwtDecode(token);
  return decodedUser;
};

export const useUserVerification = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = getUserLocalStorage();
    if (token) {
      const verifiedUser = verifyToken(token);
      if (verifiedUser) {
        setUser(verifiedUser);
      }
    }
  }, []);

  return user;
};

export const signOut: any = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem("accessToken");
    redirect("/");
  }
};

// const router = useRouter()
//   const user: any  = useUserVerification();
//   console.log(user.role);
//   if(user?.role=="USER"){
//    removeUserLocalStorage()
//   }
