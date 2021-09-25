import React, { FunctionComponent, ReactNode } from "react";
import { Layout, PageHeader, Menu } from "antd";
import Router, { useRouter } from "next/router";

import {
  FaTachometerAlt,
  FaUser,
  FaSchool,
  FaUserGraduate,
  FaTools,
  FaCog,
  FaGamepad,
} from "react-icons/fa";
interface IWrapper {
  children: ReactNode;
}

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export const Wrapper: FunctionComponent<IWrapper> = ({ children }) => {
  const router = useRouter();

  const selectedKey = router.pathname.toString().slice(1).split("/").join("-");

  return (
    <>
      <style jsx>
        {`
          .logo {
            color: white;
            text-align: center;
            padding: 12px;
            font-weight: bold;
            font-size: 48px;
          }
        `}
      </style>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider theme="dark">
          <div className="logo">LOGO</div>
          <Menu
            defaultSelectedKeys={[selectedKey]}
            defaultOpenKeys={["settings"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={true}
          >
            <Menu.Item
              onClick={() => Router.push("/dashboard")}
              key="dashboard"
              icon={<FaTachometerAlt />}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              onClick={() => Router.push("/profile")}
              key="profile"
              icon={<FaUser />}
            >
              Profile
            </Menu.Item>
            <Menu.Item
              onClick={() => Router.push("/classes")}
              key="classes"
              icon={<FaSchool />}
            >
              Classes
            </Menu.Item>
            <Menu.Item
              onClick={() => Router.push("/students")}
              key="students"
              icon={<FaUserGraduate />}
            >
              Students
            </Menu.Item>
            <Menu.Item
              onClick={() => Router.push("/tools")}
              key="tools"
              icon={<FaTools />}
            >
              Tools
            </Menu.Item>
            <SubMenu key="settings" title="Settings" icon={<FaCog />}>
              <Menu.Item
                onClick={() => Router.push("/settings/games")}
                key="settings-games"
                icon={<FaGamepad />}
              >
                Games
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "white", borderBottom: `1px solid #e2e2e2` }}
          >
            <div></div>
          </Header>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};
