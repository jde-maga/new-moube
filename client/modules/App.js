import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CustomLayout from "./Layout";

import Index from "./Index";
import TableUsers from "./TableUsers";
import User from "./User";
import TableProjects from "./TableProjects";
import Project from "./Project";
import NotFound from "./Notfound";

const App = () => (
  <BrowserRouter>
    <CustomLayout>
      <Switch>
        <Route exact path="/" component={TableProjects} />
        <Route exact path="/users" component={TableUsers} />
        <Route path="/users/:login" component={User} />
        <Route exact path="/projects" component={TableProjects} />
        <Route path="/projects/:project" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </CustomLayout>
  </BrowserRouter>
);

export default App;
