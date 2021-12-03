import Home from "./pages/Home";
import React from 'react'
import ProductList from "./pages/ProductList"
import SingleProduct from "./pages/SingleProduct"
import Cart from "./pages/Cart"
import Register from "./pages/Register"
import Login from "./pages/Login"
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
   <Router>
     <Switch>
     <Route exact path="/" component={Home} />
    <Route exact path="/ProductList" component={ProductList} />
    <Route exact path="/SingleProduct" component={SingleProduct} />
    <Route exact path="/Cart" component={Cart} />
    <Route exact path="/Register" component={Register} />
    <Route exact path="/Login" component={Login} />
    </Switch>
    </Router>
  );
}

export default App;
