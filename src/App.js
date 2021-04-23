import React from 'react'; // react
import {Route, Switch, Redirect} from 'react-router-dom' // react router
// redux
import {connect} from 'react-redux'
import {checkUserSession} from './redux/user/user.actions'
//styles
import './App.css';
// components
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.jsx'
import CheckoutPage from './pages/checkout/checkout.component.jsx'
// reselect
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'

class App extends React.Component {
 

  componentWillUnmount(){
    const {checkUserSession} = this.props
    checkUserSession()
  }


    render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact={true} path="/checkout" component={CheckoutPage}/>
          <Route exact={true} path='/signin' render={() => this.props.currentUser ? <Redirect to='/'/>: <SignInAndUp/>}/>
          <Route exact={false} path="/shop" component={ShopPage}/>
        </Switch>
      </div>
    );
  }}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: ()=>  dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
