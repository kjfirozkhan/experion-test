import React, { Fragment } from 'react';
import Filterbtns from '../filterbtns/Filterbtns';
import FilterList from '../filteredList/FilterList';
import './filterblock.scss';

const Filterblock = props => {
    return (
        <div className='filterblock-wrap clearfix'>
            <h4>Filters based on your profile</h4>
            <div className="leftblock">
                <FilterList/>
            </div>
            <div className="rightblock">
                <Filterbtns/>
            </div>
        </div>
    )
}

export default Filterblock;