import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Loadable from "react-loadable";

import Loading from "./loading";
function App() {
  const AsyncAppLayout = Loadable({
    loader: () => import("./layouts/app/"),
    loading: Loading,
  });

  const AsyncLoginForm = Loadable({
    loader: () => import("../routes/login/"),
    loading: Loading,
  });

  return (
    <div>
      <Router basename="/">
        <Switch>
          <Route path={`/app`} component={AsyncAppLayout} />
          <Route exact path={`/login`} component={AsyncLoginForm} />
          {/* <Route path={`${match.url}notFound`} component={AsyncNotFound} /> */}
          <Redirect from="/" exact to={`/login`} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
