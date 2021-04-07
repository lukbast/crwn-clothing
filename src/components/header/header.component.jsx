// styles
import './header.styles.scss';
// react router
import {Link} from 'react-router-dom';
// firebase
import {auth} from '../../firebase/firebase.utils.js'
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
const Header = ({currentUser, hidden}) =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {currentUser ?
             <div className='option' onClick={() => auth.signOut()}>LOG OUT</div>:
             <Link className='option'to='/signin'>LOG IN</Link>}
             <CartIcon/>
       </div>
       {hidden? null :  <CartDropdown/> }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)




