import CategoryPageContainer from '../category/category.container.jsx'
import CollectionsOverviewContainer from '../../components/collections-overview/collections.container'

import {Route} from 'react-router-dom'
import React from 'react'

import {connect} from 'react-redux'

import { fetchCollectionsStart } from "../../redux/collections/collections.actions";


class ShopPage  extends React.Component{

    componentDidMount(){

            const {fetchCollectionsStart} = this.props;
            fetchCollectionsStart()
        }

    render(){
        const{match} = this.props
        return (<div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:categoryId`} component={CategoryPageContainer}/>
            </div>)
    }
}


const mapDispatchToProps = dispatch =>({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null,mapDispatchToProps)(ShopPage)