import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Icon, Breadcrumb } from "antd";
import { Link, withRouter} from "react-router-dom";

import styles from "./styles";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  activeMenu = () => {
    const { location } = this.props;

    if (location.pathname === "/users") {
      return ["tableUsers"]
    }
    else if (location.pathname === "/projects") {
      return ["tableProjects"]
    }

    return [];
  }

  render() {
    return (
      <Sider className={styles.container}>
        <Menu mode="inline" className={styles.menu} selectedKeys={this.activeMenu()}>
          <Menu.Item key="tableUsers">
          <Link to="/users"><Icon type="team" /> Users</Link>
          </Menu.Item>
          <Menu.Item key="tableProjects"> 
          <Link to="/projects"><Icon type="database" /> Projects</Link>
          </Menu.Item>
          <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(Sidebar);
