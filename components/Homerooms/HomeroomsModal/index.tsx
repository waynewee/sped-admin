import React, { FunctionComponent } from "react";

import { Modal, ModalProps } from "antd";
import { IHomeroom } from "../../../types";
import { HomeroomsForm } from "../HomeroomsForm";

interface IHomeroomsModal {
  homeroom: IHomeroom;
  onSubmitForm: (formValues: any) => void;
  onCancel: () => void;
}

export const HomeroomsModal: FunctionComponent<IHomeroomsModal & ModalProps> =
  ({ homeroom, onSubmitForm, onCancel, ...props }) => {
    return (
      <Modal footer={null} centered closable={false} {...props}>
        <HomeroomsForm
          values={homeroom}
          onCancel={onCancel}
          onSubmit={(formValues) => {
            onSubmitForm(formValues);
            onCancel();
          }}
        />
      </Modal>
    );
  };
