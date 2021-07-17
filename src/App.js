import "./App.css";
import Products from "./Product/Products";
import Detail from "./Product/Detail";
import Cart from "./Product/Cart";
import LoadingTemplate from "./Product/LoadingTemPlate";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Products} />
        <LoadingTemplate path="/detail" exact component={Detail} />
        <LoadingTemplate path="/cart" exact component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
