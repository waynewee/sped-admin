import type { NextPage } from "next";
import { useContext } from "react";

import { Meta } from "../components/UI/Meta";
import { AuthContext } from "../contexts/AuthContext";

const HomePage: NextPage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Meta title="Admin" />
      {isLoggedIn ? <div>Logged In</div> : <div> NOpe</div>}
    </>
  );
};

export default HomePage;
