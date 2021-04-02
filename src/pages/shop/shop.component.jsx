import {React, Component} from 'react'

import CollectionPreview from  '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shoping-data.js'


class ShopPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }



    render(){
        return this.state.collections.map(({id, ...other}) =>
            <CollectionPreview key={id} {...other}/>)
    }
}

export default ShopPage