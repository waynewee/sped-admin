import { Card } from "antd";
import React, { FunctionComponent, useEffect, useState } from "react";
import { getHomeroom } from "../../services/homeroom";
import { getUsersByHomeroomId } from "../../services/user";
import { IHomeroom, IUser } from "../../types";
import { Wrapper } from "../Wrapper";
import { StudentsGrid } from "./StudentsGrid";

interface IHomeroomProfile {
  readableId: string;
}

export const HomeroomProfile: FunctionComponent<IHomeroomProfile> = ({
  readableId,
}) => {
  const [students, setStudents] = useState<IUser[]>([]);
  const [homeroom, setHomeroom] = useState<IHomeroom>({});

  useEffect(() => {
    async function getData() {
      const _homeroom = await getHomeroom(readableId);
      const _students: IUser[] = await getUsersByHomeroomId(
        _homeroom._id as string
      );

      setStudents(_students);
      setHomeroom(_homeroom);
    }

    getData();
  }, []);

  return (
    <Wrapper>
      <Card style={{ marginBottom: 8 }}>
        <h1>{homeroom.name}</h1>
      </Card>
      <StudentsGrid students={students} />
    </Wrapper>
  );
};
