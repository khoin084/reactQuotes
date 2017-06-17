import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Input from "../components/quotes/Input";
import Panel from "../components/QuotesPanel";



// Using just one route for now
// NOTE: browserHistory only works when run with a server
// build the webpack project, start the server, and navigate to localhost:3000
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* If user selects Search or Saved show the appropriate component */}
      
      <Route path="Favorited" component={Input} />
      
      {/* If user selects Search or Saved show the appropriate component */}
      <IndexRoute component={Panel} />
      
    </Route>
  </Router>
);

export default routes;
