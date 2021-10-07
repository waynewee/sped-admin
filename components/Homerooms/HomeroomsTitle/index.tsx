import React, { FunctionComponent } from "react";

import { Row, Col, Button } from "antd";

interface IHomeroomsTitle {
  onAdd: () => void;
}

export const HomeroomsTitle: FunctionComponent<IHomeroomsTitle> = ({
  onAdd,
}) => {
  return (
    <Row align="middle" justify="space-between">
      <Col>Classes</Col>
      <Col>
        <Button onClick={onAdd} type="primary">
          Add Class
        </Button>
      </Col>
    </Row>
  );
};
