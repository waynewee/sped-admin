import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { HomeroomProfile } from "../../../components/HomeroomProfile";

const HomeroomPage: FunctionComponent = () => {
  const router = useRouter();

  const { readableId } = router.query;

  if (!readableId) {
    return null;
  }

  console.log(readableId);

  return <HomeroomProfile readableId={readableId as string} />;
};

export default HomeroomPage;
