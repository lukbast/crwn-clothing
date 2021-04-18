import CollectionsOverview from  '../../components/collections-overview/collections-overview.component'
import CategoryPage from '../category/category.component.jsx'

import {Route} from 'react-router-dom'
import React from 'react'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/collections/collections.selectors'

import { fetchCollectionsStartAsync } from "../../redux/collections/collections.actions";

import WithSpinner from '../../components/with-spinner/with-spinner.component'
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CategoryPageWithSpinner = WithSpinner(CategoryPage)

class ShopPage  extends React.Component{

    componentDidMount(){

            const {fetchCollectionsStartAsync} = this.props;
            fetchCollectionsStartAsync()
        }

    render(){
        const{match, isCollectionLoaded} = this.props
        return (<div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
                <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
            </div>)
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch =>({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)