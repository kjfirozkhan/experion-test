import React, { Fragment } from 'react';
import './filtermodal.scss';

const FilterModal = props => {
    return (
        <Fragment>
            <div className='filtermodalfade'></div>
            <div className="filtermodal">
                <a href="" className="closebtn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2L2 14" stroke="#61636F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 2L14 14" stroke="#61636F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </Fragment>
    )
}

export default FilterModal;