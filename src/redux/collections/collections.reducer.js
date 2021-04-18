
import CollectionsDataTypes from './collections.types'

const INITIAL_STATE = {
    collections: null
}

const collectionsReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CollectionsDataTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections: action.payload
            }
        default:
            return {
                ...state
            }
    }
}


export default collectionsReducer