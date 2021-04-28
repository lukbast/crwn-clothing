import './cart-dropdown.styles.scss'
// react router
import {withRouter} from 'react-router-dom'
// redux
import {connect} from 'react-redux'
import {toggleCardHidden} from '../../redux/cart/cart.actions.js'
// reselect
import {createStructuredSelector} from 'reselect'
import {selectCartItems } from '../../redux/cart/cart.selectors' 
// componenets
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = ({cartItems, history, dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(item => (
                    <CartItem key={item.id} item={item}/>
                )) 
                : <span className='empty-msg'>Your cart is empty</span>
            }
        </div>
        <CustomButton
            onClick={() => {history.push('/checkout');
                            dispatch(toggleCardHidden())
            }}
            >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default  withRouter(connect(mapStateToProps)(CartDropdown))
