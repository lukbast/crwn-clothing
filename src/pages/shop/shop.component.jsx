import CollectionsOverview from  '../../components/collections-overview/collections-overview.component'
import CategoryPage from '../category/category.component.jsx'

import {Route} from 'react-router-dom'
import React from 'react'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils.js'

import {connect} from 'react-redux'
import {updateCollections} from '../../redux/collections/collections.actions.js'

import WithSpinner from '../../components/with-spinner/with-spinner.component'
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CategoryPageWithSpinner = WithSpinner(CategoryPage)

class ShopPage  extends React.Component{
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null

    componentDidMount(){
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')

        collectionRef.get().then( snapshot =>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({loading: false});
        } )
    }

    render(){
        const{match} = this.props
        const {loading} = this.state
        return (<div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>)
    }
}

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)