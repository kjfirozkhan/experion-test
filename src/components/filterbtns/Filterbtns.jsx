import React, { Fragment } from 'react';
import './filterbtns.scss';

const Filterbtns = props => {
    return (
        <Fragment>
            <a href="#" className="clearall">Clear All</a>
            <button className="filter-btn">Filters</button>
        </Fragment>
    )
}

export default Filterbtns;