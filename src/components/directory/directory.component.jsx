// styles
import './directory.styles.scss'
// redux
import {connect} from 'react-redux'
// reselect
import {createStructuredSelector} from 'reselect'
import {selectSection} from '../../redux/directory/directory.selectors.js'
// components
import MenuItem from '../menu-item/menu-item.component'

const  Directory = ({section})=> {
    
        return(
            <div className='directory-menu'>
                {
                    section.map(entry => <MenuItem key={entry.id} title={entry.title}
                    imageUrl={entry.imageUrl} linkUrl={entry.linkUrl} size={entry.size}/>)
                }
            </div>
        )
    }


const mapStateToProps = createStructuredSelector({
  section: selectSection
})



export default connect(mapStateToProps)(Directory)

