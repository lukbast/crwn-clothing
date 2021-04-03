import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.jsx'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();

    this.state= {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      createUserProfileDocument(this.state.currentUser);
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


    render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact={true} path="/shop" component={ShopPage}/>
          <Route exact={true} path='/signin' component={SignInAndUp}/>
        </Switch>
      </div>
    );
  }}

export default App;
