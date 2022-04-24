import SortSelect from '../sort-select/SortSelect';
import './contenttopblock.scss';

const ContentTopBlock = props => {
    return (
        <div className='content-top-wrap clearfix'>
            <h3>Showing 26 Product</h3>
            <div className="rightblock">
               <SortSelect/>
            </div>
        </div>
    )
}

export default ContentTopBlock;