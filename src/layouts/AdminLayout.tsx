import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React, { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";

import { NavbarComponent } from "./components/Navbar";
import bg from "../assets/img/bg.jpg";
import "./styles/AdminLayout.scss";
import { Footer } from "views/Footer/Footer";

export const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [siteLayoutMarginLeft, setSiteLayoutMarginLeft] = useState(200);
  const [selectedKey, setSelectedKey] = useState("1");

  const toggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <>
      <Layout style={{ backgroundImage: `url(${bg})` }} id="wraper">
        <NavbarComponent />
        <Content style={{ padding: "3em 0" }}>
          <Outlet />
        </Content>
      </Layout>
      <Footer />
    </>
  );
};
