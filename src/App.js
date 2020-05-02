import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
    </div>
  );
}

export default App;
