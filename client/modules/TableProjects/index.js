import React, { Component } from "react";
import { Table, Card, Avatar } from "antd";
import { Link } from "react-router-dom";

import projects from "./mock";

const dataSource = [
  {
    key: "1",
    login: "jde-maga",
    name: "Julien de Magalhaes",
    level: 10
  },
  {
    key: "2",
    login: "aaa",
    name: "super",
    level: 15
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    rowKey: "description"
  },
  {
    title: "Tier",
    dataIndex: "tier"
  },
  {
    title: "Estimated time",
    dataIndex: "project_sessions[0].estimate_time"
  },
  {
    title: "See project",
    render: data => (
      <div>
        <Link to={`/projects/${data.slug}`}>See project</Link>
      </div>
    )
  }
];

class TableProjects extends Component {
  render() {
    return (
      <div>
        <Card>Search stuff</Card>
        <Table
          dataSource={projects.map(project => {
            delete project.children;
            return project;
          })}
          columns={columns}
        />
      </div>
    );
  }
}

export default TableProjects;
