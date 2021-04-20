import React from "react";
import Layout from "../components/Layout";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/projects'  component={Projects} />
      <Route path='/blog'  component={Blog} />
    </Switch>
  </Layout>
);

export default AppRoutes;
