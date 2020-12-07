import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Payment from './components/pages/Payment';

import ProductState from './context/ProductState';

function App() {
  return (
    <ProductState>
      <Router>
        <>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/payment" component={Payment} />
            </Switch>
          </div>
        </>
      </Router>
    </ProductState>
  );
}

export default App;
