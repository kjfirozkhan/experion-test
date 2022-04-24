import React, { useState, Fragment } from 'react';
import FilterModal from '../filter-modal/FilterModal';
import './filterbtns.scss';

const Filterbtns = props => {
    const [showFilter, setShowFilter] = useState(false);

    const showFilterHandler = () => {
        setShowFilter(true);
    }

    const hideFilterHandler = () => {
        setShowFilter(false);
    }

    return (
        <Fragment>
            <a href="#" className="clearall">Clear All</a>
            <button className="filter-btn" onClick={showFilterHandler} >Filters</button>
            {showFilter && <FilterModal onHideFilter={hideFilterHandler}/>}
        </Fragment>
    )
}

export default Filterbtns;