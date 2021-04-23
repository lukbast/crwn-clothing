import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CategoryPage from './category.component'

import { selectIsCollectionLoaded} from '../../redux/collections/collections.selectors'
import {createStructuredSelector} from 'reselect'


import {compose} from 'redux'
import {connect} from 'react-redux'



const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CategoryPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner)
    (CategoryPage)

export default CategoryPageContainer