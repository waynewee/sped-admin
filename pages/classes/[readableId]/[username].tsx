import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

const StudentPage: FunctionComponent = () => {
  const router = useRouter();

  const { readableId, username } = router.query;

  console.log(readableId, username);

  return (
    <div>
      {readableId} {username}
    </div>
  );
};

export default StudentPage;
