import './checkout-item.styles.scss'

import {removeItem, increaseQty, decreaseQty} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'

const CheckoutItem = ({item, removeItem, increaseQty, decreaseQty}) =>(
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item'  src={item.imageUrl}/>
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=> decreaseQty(item) }>&#10094;</div>
            <span className='value'>{item.quantity}</span>
            <div onClick={() => increaseQty(item)} className='arrow'>&#10095;</div>
        </span>
        <span className='price'>{item.price}</span>
        <div onClick={() =>removeItem(item.id)} className='remove-button'>&#10005;</div>
    </div>
)

const mapDispatchToProps = dispatch =>({
    removeItem: id => dispatch(removeItem(id)),
    decreaseQty: item => dispatch(decreaseQty(item)),
    increaseQty: item => dispatch(increaseQty(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)