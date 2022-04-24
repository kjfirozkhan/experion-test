import React, { Fragment } from 'react';
import Checkbox from '../checkbox/Checkbox';
import './filtermodal.scss';

const FilterModal = props => {
    const hideFilterHandler = () => {
        props.onHideFilter();
    }

    return (
        <Fragment>
            <div className='filtermodalfade'></div>
            <div className="filtermodal ">
                <a className="closebtn" onClick={hideFilterHandler}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2L2 14" stroke="#61636F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 2L14 14" stroke="#61636F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>

                <div className="filter-body-wrap clearfix">
                    <h3>Filters</h3>
                    <form action="">
                        <div className="checkbox-main-wrap clearfix">
                            <Checkbox/>
                            <Checkbox/>
                        </div>
                        <div className="checkbox-main-wrap clearfix">
                            <h4>Price</h4>
                            <Checkbox/>
                            <Checkbox/>
                        </div>
                        <div className="checkbox-main-wrap clearfix">
                            <h4>Categories</h4>
                            <Checkbox/>
                            <Checkbox/>
                        </div>
                        <div className="checkbox-main-wrap clearfix">
                            <h4>Color</h4>
                            <Checkbox/>
                            <Checkbox/>
                        </div>

                    </form>
                </div>
                <div className="btn-wrap">
                    <button className="btn btn-clearall">Clear all</button>
                    <button className="btn btn-apply">Apply</button>
                </div>
            </div>
        </Fragment>
    )
}

export default FilterModal;