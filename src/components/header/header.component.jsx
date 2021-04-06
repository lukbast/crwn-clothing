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


const Header = ({currentUser}) =>(
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
       </div>
    </div>
)

const mapStateToProps = (state) =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)




