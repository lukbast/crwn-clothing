import CartActionTypes from './cart.types'

export const toggleCardHidden = () =>({
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    });

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = index =>({
    type: CartActionTypes.REMOVE_ITEM,
    payload: index
});

export const increaseQty = (item) => ({
    type: CartActionTypes.INCREASE_QTY,
    payload: item
})

export const decreaseQty = (item) => ({
    type: CartActionTypes.DECREASE_QTY,
    payload: item
})

export const clearCart = () =>({
    type: CartActionTypes.CLEAR_CART
})
