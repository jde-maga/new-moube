import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Card, Avatar } from "antd";
import { Link } from "react-router-dom";

import styles from "./styles";

const dataSource = [{
  key: "1",
  login: "jde-maga",
  name: "Julien de Magalhaes",
  level: 10
}, {
  key: "2",
  login: "aaa",
  name: "super",
  level: 15
}];

const columns = [{
  title: 'Avatar',
  dataIndex: 'avatar',
  key: 'avatar',
  render: () => <div className={styles.avatar}><Avatar size="small" icon="user" /></div>
}, {
  title: 'Login',
  dataIndex: 'login',
  key: 'login',
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
},{
    title: "Level",
    dataIndex: "level",
    key: "level",
  }, {
    title: "See profile",
  render: (data) => <div>
    <Link to={`/users/${data.login}`}>See profile</Link>
  </div>
  }
];

class TableUsers extends Component {
  static PropTypes = {
    history: PropTypes.object.isRequired
  };

  goToUser = (a,b,c,d) => {
    const { history } = this.props;
    console.log(a,b,c,d);
    this.props.history.push("/user");
  };

  render() {
    return (
      <div className={styles.container}>
        <Card>Search stuff</Card>
        <Table
          dataSource={dataSource}
          columns={columns}
        />

      </div>
    )
  }
};

export default TableUsers;
