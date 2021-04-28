import './checkout.styles.scss'

import {connect} from 'react-redux'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({cartItems, total}) =>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)}

        <div className='total'>{`TOTAL: ${total} PLN `} </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)