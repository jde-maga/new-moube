import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Card, Table } from "antd";
import moment from "moment";

const TabPane = Tabs.TabPane;

const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];

const columns = [{
  title: 'Project name',
  dataIndex: 'project.name',
  rowKey: 'project.id'
}, {
  title: 'State',
  dataIndex: 'status',
}, {
  title: 'Grade',
  dataIndex: 'final_mark',
},{
  title: 'Tries',
  dataIndex: 'occurrence',
}, {
  title: 'Marked at',
  dataIndex: 'marked_at',
  render: (text) => moment(text).format("LLL")
}];


class CursusPane extends Component {
  static propTypes = {
    cursus: PropTypes.object.isRequired
  }

  render() {
    const { cursus, projects } = this.props;

    return (
      <div>
      <div>Grade : {cursus.grade || '-'}</div>
      <div>Level : {cursus.level}</div>
      <Table dataSource={projects} columns={columns} rowKey="id" expandedRowRender={() => <div>ok</div>}/>
      </div>
    )
  }
};

export default CursusPane;
