import React, { FunctionComponent, ReactNode, useContext } from "react";
import { Layout, PageHeader, Menu, Breadcrumb } from "antd";
import Router, { useRouter } from "next/router";

import { FaTachometerAlt, FaUser, FaSchool, FaPowerOff } from "react-icons/fa";
interface IWrapper {
  children: ReactNode;
}

import { Row, Col } from "antd";
import { AuthContext } from "../../contexts/AuthContext";
import { getLogout } from "../../services/logout";
import { getBreadCrumbsFromPath } from "../../utils";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export const Wrapper: FunctionComponent<IWrapper> = ({ children }) => {
  const router = useRouter();

  const { user, setUser, setIsLoggedIn } = useContext(AuthContext);

  const selectedKey = router.pathname.toString().slice(1).split("/").join("-");

  const handleLogout = async () => {
    await getLogout();
    setUser({});
    setIsLoggedIn(false);
    window.open("/login", "_self");
  };

  const breadCrumbs = getBreadCrumbsFromPath(router.asPath);

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
              onClick={() => Router.push("/classes")}
              key="classes"
              icon={<FaSchool />}
            >
              Classes
            </Menu.Item>
            <Menu.Item
              style={{
                backgroundColor: "inherit",
              }}
              onClick={handleLogout}
              icon={<FaPowerOff />}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "white", borderBottom: `1px solid #e2e2e2` }}
          >
            <Row justify="space-between" align="middle">
              <Col>
                <Breadcrumb separator=">">
                  {breadCrumbs.map((breadCrumb) => {
                    return (
                      <Breadcrumb.Item href={breadCrumb.href}>
                        <span style={{ textTransform: "capitalize" }}>
                          {breadCrumb.label}
                        </span>
                      </Breadcrumb.Item>
                    );
                  })}
                </Breadcrumb>
              </Col>
              <Col>
                <FaUser />
                {user.username}
              </Col>
            </Row>
          </Header>
          <Content style={{ padding: 8 }}>{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};
