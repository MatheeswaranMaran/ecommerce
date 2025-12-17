import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    try {
      const user = await api.post("/user/login", { email, password });
      const token = user.data.token;
      setCookie("token", token, { path: "/" });
      navigate("/");
      alert(user.data.message);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cookies.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [cookies.token]);

  const logOutUser = () => {
    removeCookie("token", { path: "/" });
    setIsLoggedIn(false);
  };

  const registerUser = async (name, email, mobileNumber, password) => {
    try {
      const user = await api.post("/user/create", {
        name,
        email,
        mobileNumber,
        password,
      });
      navigate("/signin");
      alert(user.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{ loginUser, isLoggedIn, logOutUser, registerUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* ---------- CUSTOM HOOK ---------- */
export const useApp = () => useContext(AppContext);
