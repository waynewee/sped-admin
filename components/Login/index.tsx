import React, { FunctionComponent, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Router from "next/router";
import { LoginForm } from "./LoginForm";

export const Login: FunctionComponent = () => {
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      Router.push("/dashboard");
    }
  }, []);

  if (!isLoggedIn) {
    return <LoginForm />;
  } else {
    Router.push("/dashboard");
    return null;
  }
};
