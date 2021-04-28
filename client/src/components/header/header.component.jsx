// styles
import './header.styles.scss';
// react router
import {Link} from 'react-router-dom';
// redux
import {connect} from 'react-redux'
// crown logo
import { ReactComponent as Logo} from '../../assets/crown.svg';
// cart icon
import CartIcon from '../cart-icon/cart-icon.componet'
//cart dropdown
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
// reselect
import {createStructuredSelector} from 'reselect'
import {selectCartHidden } from '../../redux/cart/cart.selectors' 
import {selectCurrentUser} from '../../redux/user/user.selectors'

import {signOutStart} from '../../redux/user/user.actions'

const Header = ({currentUser, hidden, signOutStart}) =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {currentUser ?
             <div className='option' onClick={signOutStart}>SIGN OUT</div>:
             <Link className='option'to='/signin'>SIGN IN</Link>}
             <CartIcon/>
       </div>
       {hidden? null :  <CartDropdown/> }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
    signOutStart: ()=> dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
