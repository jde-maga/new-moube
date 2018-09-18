import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CustomLayout from "./Layout";

import Index from "./Index";
import TableUsers from "./TableUsers";
import User from "./User";
import TableProjects from "./TableProjects";
import NotFound from "./Notfound";

const App = () => (
  <BrowserRouter>
  <CustomLayout>
    <Switch>
      <Route exact path="/" component={User} />
      <Route exact path="/users" component={TableUsers} />
      <Route path="/users/:login" component={User} />
      <Route path="/projects" component={TableProjects} />
      <Route component={NotFound} />
    </Switch>
  </CustomLayout>
  </BrowserRouter>
);

export default App;