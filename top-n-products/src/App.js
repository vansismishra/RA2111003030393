import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './components/Products';
import ProductDetails from './components/Product_Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllProducts} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;

