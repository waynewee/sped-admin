import React, { FunctionComponent } from "react";

import { Row, Table, Dropdown, Menu } from "antd";

import { FaBars, FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { IHomeroom } from "../../../types";
interface IHomeroomsTable {
  dataSource: IHomeroom[];
  onView: (kebabName: string) => void;
  onEdit: (kebabName: string) => void;
  onDelete: (kebabName: string) => void;
}

export const HomeroomsTable: FunctionComponent<IHomeroomsTable> = ({
  dataSource,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <Table
      dataSource={dataSource}
      columns={[
        {
          title: "Code",
          dataIndex: "code",
          width: "10%",
        },
        {
          title: "Name",
          dataIndex: "name",
          width: "20%",
        },
        {
          title: "Description",
          dataIndex: "description",
          width: "45%",
        },
        {
          title: "Homeroom ID",
          dataIndex: "readableId",
          width: "15%",
        },
        {
          title: "Actions",
          render: (record) => {
            return (
              <Dropdown
                trigger={["click"]}
                overlay={
                  <Menu>
                    <Menu.Item
                      onClick={() => onView(record.readableId)}
                      key="view"
                    >
                      <Row align="middle">
                        <FaEye style={{ marginRight: 8 }} /> View
                      </Row>
                    </Menu.Item>
                    <Menu.Item onClick={() => onEdit(record._id)} key="edit">
                      <Row align="middle">
                        <FaPen style={{ marginRight: 8 }} /> Edit
                      </Row>
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => onDelete(record._id)}
                      key="delete"
                    >
                      <Row align="middle">
                        <FaTrashAlt style={{ marginRight: 8 }} /> Delete
                      </Row>
                    </Menu.Item>
                  </Menu>
                }
              >
                <FaBars style={{ cursor: "pointer" }} />
              </Dropdown>
            );
          },
          width: "10%",
        },
      ]}
    />
  );
};
