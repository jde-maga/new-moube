import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Icon, Breadcrumb } from "antd";

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

import CustomHeader from "./Header";
import Sidebar from "./Sidebar";

import styles from "./styles";

class CustomLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <Layout className={styles.layoutContainer}>
        <CustomHeader />
        <Layout className={styles.contentContainer}>
          <Sidebar />
          <Content className={styles.dataContainer}>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default CustomLayout;
