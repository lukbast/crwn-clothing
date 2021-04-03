import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact={true} path="/shop" component={ShopPage}/>
        <Route exact={true} path='/signin' component={SignInAndUp}/>
      </Switch>
    </div>
  );
}

export default App;
