import React, { FunctionComponent, useEffect, useState } from "react";
import Router from "next/router";

import { Card } from "antd";
import { Wrapper } from "../Wrapper";

import { HomeroomsTable } from "./HomeroomsTable";
import { HomeroomsTitle } from "./HomeroomsTitle";
import { HomeroomsModal } from "./HomeroomsModal";
import { getHomerooms, postHomeroom } from "../../services/homeroom";
import { IHomeroom } from "../../types";

const defaultFormValues: IHomeroom = {
  name: "",
  code: "",
  description: "",
};

export const Homerooms: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add Class");
  const [homerooms, setHomerooms] = useState([] as IHomeroom[]);
  const [formValues, setFormValues] = useState(defaultFormValues);

  useEffect(() => {
    async function _getHomerooms() {
      const _homerooms = await getHomerooms();
      setHomerooms(_homerooms);
    }

    _getHomerooms();
  }, []);

  const handleAdd = () => {
    setFormValues(defaultFormValues);
    setVisible(true);
  };

  const handleView = (path: string) => {
    Router.push(`/classes/${path}`);
  };

  const handleEdit = (homeroomId: string) => {
    const homeroom: IHomeroom | undefined = homerooms.find(
      (homeroom) => homeroom._id === homeroomId
    );

    if (homeroom !== undefined) {
      setFormValues(homeroom);
      setVisible(true);
    }
  };

  const handleDelete = (homeroomId: string) => {
    console.log(homeroomId);
  };

  const handleSubmitForm = async (formValues: any) => {
    const homeroom = await postHomeroom(formValues);
    setHomerooms([homeroom, ...homerooms]);
  };

  return (
    <Wrapper>
      <Card title={<HomeroomsTitle onAdd={handleAdd} />}>
        <HomeroomsModal
          homeroom={formValues}
          onCancel={() => setVisible(false)}
          onSubmitForm={handleSubmitForm}
          title={modalTitle}
          visible={visible}
        />
        <HomeroomsTable
          dataSource={homerooms}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onView={handleView}
        />
      </Card>
    </Wrapper>
  );
};
