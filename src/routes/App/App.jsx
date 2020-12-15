import React from "react";
import { Row } from "antd";
import { Route, Switch } from "react-router-dom";
import { PrivateRoutes } from "../common";
import { Dashboard } from "../Dashboard";
import { AddQuestion } from "../AddQuestion";
import { Login } from "../Login";
import { ViewQuestions } from "../ViewQuestions";

const App = () => {
  return (
    <>
      <Switch>
        <PrivateRoutes path="/" exact>
          <Dashboard />
        </PrivateRoutes>
        <PrivateRoutes path="/add-question" exact>
          <AddQuestion />
        </PrivateRoutes>
        <PrivateRoutes path="/questions/:category" exact>
          <ViewQuestions />
        </PrivateRoutes>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export { App };
