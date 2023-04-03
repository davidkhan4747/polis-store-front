import { Children, createContext, useEffect, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/api";
import axios from 'axios'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { "nextauth.token": token } = parseCookies();

  const get_user =  async() => {
    if( token ){
        const headers = {
            "Authorization" : `Bearer ${ token }`
        };
        let result = await axios( {
            method:'get',
            url: 'auth-user',
            baseURL: "http://s499964.smrtp.ru/api/",
            data: JSON.stringify({}),
            headers: headers,
        } );
        let userP = result.data;
        console.log( "get_user", userP );
    } else {
        console.log("Login Token is empty");
    }
}
  useEffect(() => {
    get_user()
  }, []);

  async function registration(data) {
    console.log(data)
    await api
      .post("userSave", {
        tel_email: data.tel_email,
        new_code: data.new_code,
        code_new: data.code_new,
    
      })
      // .then((response) => {
      //   if (response.data.success) {
      //     setUser({
      //       tel_email: response.data.data.name,
      //       surname: response.data.data.surname,
      //       email: response.data.data.email,
      //       avatar: response.data.data.avatar,
      //     });
      //   }
      //   setCookie(undefined, "nextauth.token", response.data.data.token, {
      //     maxAge: 60 * 60 * 1,
      //   });

      //   api.defaults.headers.common[
      //     "Authorization"
      //   ] = `Bearer ${response.data.data.token}`;
      // })
      .catch((err) => {
        setAlert(true);
        setErrorMsg({
          type: "registration",
        });
      });
    Router.push("./auth");
  }

  async function signIn(data) {
    await api
      .post("userCheck", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if (response.data.token) {
          Router.push("/personal-area");
        }else {
          console.log('Нет такого пользоваталя !')
        }

        setCookie(undefined, "nextauth.token", response.data.token, {
          maxAge: 60 * 60 * 1,
        });

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        setOpen(true);
      })
      .catch((err) => {
        setAlert(true);
        setErrorMsg({
          type: "login",
        });
        console.log("--->>>", err.response.data);
      });

      
  }

  function logOut() {
    destroyCookie(null, "nextauth.token");
    Router.push("/");
  }

  return (
    <AuthContext.Provider
      value={{
        
        signIn,
        isAuthenticated,
        registration,
        open,
        setOpen,
        errorMsg,
        alert,
        setAlert,
        setErrorMsg,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
