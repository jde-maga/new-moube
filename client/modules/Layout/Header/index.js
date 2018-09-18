import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Avatar, Dropdown } from "antd";

const { Header } = Layout;
const { Item } = Menu;

import styles from "./styles";

class CustomHeader extends Component {
  render() {
    return (
      <div>
        <Header className={styles.header}>
        <Link to="/">
          <h1 className={styles.title}>Supermoube</h1>
        </Link>
          <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        className={styles.menu}
      >
        <Item key="1"><Link to="/nav1">nav 1</Link></Item>
        <Item key="2">nav 2</Item>
        <Item key="3">nav 3</Item>  
        </Menu>
        <Dropdown overlay={
           <Menu>
            <Item>Profil</Item>
            <Item>Paramètres</Item>
            <Item>Déconnection</Item>
          </Menu>
         }>
          <div className={styles.user}>
          Invité{" "}
          <Avatar size="medium" icon="user" />
          </div>
        </Dropdown>
        </Header>      
      </div>
    )
  }
}

export default CustomHeader;