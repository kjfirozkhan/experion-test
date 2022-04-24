import Filterbtns from '../filterbtns/Filterbtns';
import FilterList from '../filteredList/FilterList';
import './filterblock.scss';

const DUMMY_FILTERS = [
    {
        name: 'Size',
    },
    {
        name: 'Color',
    },
    {
        name: 'Nike',
    },
    {
        name: 'Casual',
    },
    {
        name: 'Footwear',
    },
];

const Filterblock = props => {
    const filterslist = DUMMY_FILTERS.map(filter => <FilterList name={filter.name} />);

    return (
        <div className='filterblock-wrap clearfix'>
            <h4>Filters based on your profile</h4>
            <div className="leftblock">
                { filterslist }
            </div>
            <div className="rightblock">
                <Filterbtns/>
            </div>
        </div>
    )
}

export default Filterblock;