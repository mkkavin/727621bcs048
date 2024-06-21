import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Top Products App</h1>
      </header>
      <main className="App-main">
        <Switch>
          <Route path="/" exact component={AllProducts} />
          <Route path="/product/:productId" component={ProductDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
