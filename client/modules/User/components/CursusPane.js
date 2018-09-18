import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

class CursusPane extends Component {

  render() {

    console.log(this.props);
    return (
      <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
    )
  }
};

export default CursusPane;
