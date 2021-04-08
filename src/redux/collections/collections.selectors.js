import {createSelector} from 'reselect'

const selectCollectionState = state => state.collections;

export const selectCollections = createSelector(
    [selectCollectionState],
    collections => collections.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCategory = categoryUrlParam =>
    createSelector (
        [selectCollections],
        collections => collections[categoryUrlParam]
        )
