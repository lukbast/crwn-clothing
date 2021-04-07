import React from 'react'; // react
import {Route, Switch, Redirect} from 'react-router-dom' // react router
// redux
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
//styles
import './App.css';
// components
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.jsx'
import CheckoutPage from './pages/checkout/checkout.component.jsx'
// firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
// reselect
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'


class App extends React.Component {
 
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(userAuth)
      }
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


    render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact={true} path="/shop" component={ShopPage}/>
          <Route exact={true} path="/checkout" component={CheckoutPage}/>
          <Route exact={true} path='/signin' render={() => this.props.currentUser ? <Redirect to='/'/>: <SignInAndUp/>}/>
        </Switch>
      </div>
    );
  }}

const mapStateToProps =createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
