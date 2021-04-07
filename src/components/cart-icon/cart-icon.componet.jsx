import './cart-icon.styles.scss'

import {connect} from 'react-redux'
import {toggleCardHidden} from '../../redux/cart/cart.actions.js'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors.js'

const CartIcon = ({toggleCardHidden, itemCount}) =>(
    <div className='cart-icon' onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>

    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})

const mapStateToProps = (state) => ({
        itemCount: selectCartItemsCount(state)
    })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)