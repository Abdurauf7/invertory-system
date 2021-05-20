import React from "react";
import { Layout } from "antd";
import { Route, Switch, withRouter } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../../loading/";
const Content = ({ match }) => {
  const Dashboard = Loadable({
    loader: () => import("../../../routes/dashboard/"),
    loading: Loading,
  });
  const Products = Loadable({
    loader: () => import("../../../routes/products/"),
    loading: Loading,
  });

  return (
    <Layout.Content style={{ margin: "2em", background: "#fff" }}>
      <>
        <Switch>
          <Route path={`${match.url}/dashboard`} component={Dashboard} />
          <Route path={`${match.url}/products`} component={Products} />
        </Switch>
      </>
    </Layout.Content>
  );
};

export default withRouter(Content);
