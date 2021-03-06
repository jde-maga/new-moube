import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Card, Icon, Tabs, Collapse } from "antd";

import { user } from "./mock";

import CursusPane from "./components/CursusPane";
import HistoryPane from "./components/HistoryPane";

import styles from "./styles";

const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

class User extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  getCursusTab = () => {
    const allCursus = user.cursus_users;
    const projects = user.projects_users;

    return allCursus.map(cursus => {
      return (
        <TabPane tab={cursus.cursus.name} key={cursus.id}>
          <CursusPane
            cursus={cursus}
            projects={projects.filter(project => {
              return project.cursus_ids.find(id => id === cursus.cursus.id);
            })}
          />
        </TabPane>
      );
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Card title={user.login}>
          <div className={styles.profileCard}>
            <div>
              <img src={user.image_url} alt={user.login} />
            </div>
            <div className={styles.profileCardInfos}>
              <div>
                <Icon type="user" /> {user.first_name} {user.last_name}
              </div>
              <div>
                <Icon type="wallet" /> {user.correction_point} correction
                point(s)
              </div>
              <div>
                <Icon type="dollar" /> {user.wallet} altarien dollar(s)
              </div>
              <div>
                <Icon type="experiment" /> From the {user.pool_month}{" "}
                {user.pool_year} pool
              </div>
              <div>
                <Icon type="phone" /> {user.phone}
              </div>
              <div>
                <Icon type="mail" /> {user.email}
              </div>
              <div>
                <Icon type="star" /> From the staff :{" "}
                {user["staff?"] ? "Yes" : "No"}
              </div>
            </div>
          </div>
        </Card>
        <Collapse defaultActiveKey={["cursus"]}>
          <Panel header="Cursus" key="cursus">
            <Tabs defaultActiveKey={String(user.cursus_users[0].id)}>
              {this.getCursusTab()}
            </Tabs>
          </Panel>
          <Panel header="History" key="history">
            <HistoryPane />
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default withRouter(User);
