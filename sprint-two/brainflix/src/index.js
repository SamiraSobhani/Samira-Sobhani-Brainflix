import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import App from "./App";
import Upload from "./Upload"; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/videos/:id" component={App} />
        <Route path="/videos" component={App}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/" component={App} exact />
        <Route path="/*">
        <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
