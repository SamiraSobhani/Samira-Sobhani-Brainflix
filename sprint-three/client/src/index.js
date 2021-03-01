import React from "react";
import App from "./App";
import Upload from "./Upload";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Router,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/videos/:id" component={App} />
        <Route path="/videos" component={App} />
        <Route path="/upload" component={Upload} />
        <Route path="/" component={App} exact />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
