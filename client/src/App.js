import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "./commons";
import {
  PostCreationPage,
  HomePage,
  PostEditionPage,
  PostPage,
  Page404
} from "./components";

export const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />>
          <Route path="/create" component={PostCreationPage} />
          <Route path="/edit" component={PostEditionPage} />
          <Route path="/posts/:slug" component={PostPage} />
          <Route path="*" component={Page404} />
        </Switch>
      </Container>
    </Router>
  </Provider>
);
