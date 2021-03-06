import CartActionTypes from './cart.types' 
import {addItemToCart, removeItemFromCart} from './cart.utils'

const INITIAL_VALUE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_VALUE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
           return {
               ...state,
               cartItems:  state.cartItems
               .filter((item) => (item.id !== action.payload))
           }
        case CartActionTypes.DECREASE_QTY:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
              };
        case CartActionTypes.INCREASE_QTY:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
              };
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
           return state
    }
}


export default cartReducer