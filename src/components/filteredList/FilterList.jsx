import React, { Fragment } from 'react';
import './filterlist.scss';

const FilterList = props => {
    return (
        <span className="filtered-span">{props.name}
            <a href="#">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L1 9" stroke="#767d98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 1L9 9" stroke="#767d98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </span>
    )
}

export default FilterList;