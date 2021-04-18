import './category.styles.scss'
// redux
import {connect} from 'react-redux'
// reselect
import {selectCategory} from '../../redux/collections/collections.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CategoryPage = ({category}) =>(
    <div className='category'>
        <h1 className='title'>{category.title}</h1>
        <div className='items'>
            {category.items.map(item => <CollectionItem className='collection-item' key={item.id} item={item} />)}
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) =>({
    category: selectCategory(ownProps.match.params.categoryId.toLowerCase())(state)
})


export default connect(mapStateToProps)(CategoryPage)