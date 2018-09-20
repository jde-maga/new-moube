import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import moment from "moment";
import { Link } from "react-router-dom";
import { Tabs, Card, Table, Icon } from "antd";

import parseStatus from "../../../libs/parseStatus";

const TabPane = Tabs.TabPane;

class CursusPane extends Component {
  static propTypes = {
    cursus: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired
  }

  isParentProject = (project) => {
    const { projects } = this.props;

    const parentsId = _.compact(_.uniq(projects.map((project) => project.project.parent_id)));

    if (project.status === "parent" || parentsId.includes(project.project.id))
      return true;
    return false;
  }

  sortProjectsArray = (a,b) => {
    const index = {
      finished: 9,
      in_progress: 10,
      parent: 11,
    }

    if (!(index[b.status] - index[a.status])) {
      if (a.status === "finished") {
        return moment(a.marked_at).isBefore(b.marked_at);
      }
    }

    return index[b.status] - index[a.status];
  };

  getSingleProjects = () => {
    const { projects } = this.props;

    return projects.filter((project) => !this.isParentProject(project) && !project.project.parent_id);
  }

  getParentProjects = () => {
    const { projects } = this.props;

    const parentsId = _.compact(_.uniq(projects.map((project) => project.project.parent_id)));

    return projects.filter((project) => this.isParentProject(project));
  };
 
  render() {
    const { cursus, projects } = this.props;

    const columns = [{
      title: 'Project name',
      dataIndex: 'project.name',
      rowKey: 'project.id',
      render: (text, record) => <span><Link to={`projects/${record.project.slug}`}>{text}</Link>{this.isParentProject(record) && " (Parent Project)"}</span>
    }, {
      title: 'State',
      dataIndex: 'status',
      render: (text) => parseStatus(text)
    }, {
      title: 'Grade',
      dataIndex: 'final_mark',
      render: (text, record) => {
        if (record.status !== "finished") {
          return "-"
        }
        return <span><Icon type={record["validated?"] ? "check" : "close"} /> {text}</span>;
      }
    },{
      title: 'Tries',
      dataIndex: 'occurrence',
      render: (text, record) => {
        if (record.status === "parent") {
          return "-"
        }
        return text + 1;
      }
    }, {
      title: 'Marked at',
      dataIndex: 'marked_at',
      render: (text, record) => {
        if (record.status !== "finished") {
          return "-"
        };
    
        return moment(text).format("LLL")
      }
    }];

    const allProjects = [...this.getParentProjects().sort(this.sortProjectsArray), ...this.getSingleProjects().sort(this.sortProjectsArray)];

    return (
      <div>
      <div>Grade : {cursus.grade || '-'}</div>
      <div>Level : {cursus.level}</div>
      <Table dataSource={allProjects} columns={columns} rowKey="id" expandedRowRender={() => <div>ok</div>}/>
      </div>
    )
  }
};

export default CursusPane;
