import CollectionsActionTypes from './collections.types'

export const updateCollections = (collectionsMap) => ({
    type: CollectionsActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})