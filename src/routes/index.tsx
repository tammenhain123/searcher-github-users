import SearchPage from "../pages/search";
import HistoryPage from "../pages/history";

import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path={['/', '/search/:user']} component={SearchPage} exact />
      <Route path="/history" component={HistoryPage} />
    </Switch>
  );
}
