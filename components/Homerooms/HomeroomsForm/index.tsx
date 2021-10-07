import React, { FunctionComponent, useEffect } from "react";

import { Form, Input, Button, Row, Col } from "antd";
import { useForm } from "antd/lib/form/Form";
import { IHomeroom } from "../../../types";

interface IHomeroomsForm {
  onSubmit: (formValues: any) => void;
  onCancel: () => void;
  values: IHomeroom;
}

export const HomeroomsForm: FunctionComponent<IHomeroomsForm> = ({
  onSubmit,
  onCancel,
  values,
}) => {
  const [form] = useForm();

  useEffect(() => {
    console.log(values);
    if (values) {
      console.log("setting field values");
      form.setFieldsValue(values);
    }
  }, [values]);

  const handleFinish = (values: any) => {
    onSubmit(values);
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleFinishFailed = () => {};

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Code"
        labelAlign="left"
        name="code"
        rules={[{ required: true, message: "Please input your class code!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Name"
        labelAlign="left"
        name="name"
        rules={[{ required: true, message: "Please input your class name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        labelAlign="left"
        name="description"
        rules={[
          { required: true, message: "Please input a short description!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Row justify="end" gutter={8}>
          <Col>
            <Button onClick={handleCancel}>Cancel</Button>
          </Col>
          <Col>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};
