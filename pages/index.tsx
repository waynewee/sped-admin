import type { NextPage } from "next";
import { useContext } from "react";
import { Login } from "../components/Login";
import Router from "next/router";

import { Meta } from "../components/UI/Meta";
import { AuthContext } from "../contexts/AuthContext";

const HomePage: NextPage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    Router.push("/dashboard");
  }

  return (
    <>
      <Meta title="Admin" />
      <Login />
    </>
  );
};

export default HomePage;
