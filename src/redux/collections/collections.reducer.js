
import collections from './shop.data'

const INITIAL_STATE = {
    collections: collections
}

const collectionsReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return {
                ...state
            }
    }
}


export default collectionsReducer