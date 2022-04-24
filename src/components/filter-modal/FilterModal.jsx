import React, { Fragment } from 'react';
import Checkbox from '../checkbox/Checkbox';
import './filtermodal.scss';

const FilterModal = props => {
    const hideFilterHandler = () => {
        props.onHideFilter();
    }

    const GENDERLIST = [
        {
            checkboxLabel: 'Men',
        },
        {
            checkboxLabel: 'Women',
        },
        {
            checkboxLabel: 'Boys',
        },
        {
            checkboxLabel: 'Girls',
        },
    ];

    const PRICELIST = [
        {
            checkboxLabel: 'Rs. 1997 to Rs. 6172',
        },
        {
            checkboxLabel: 'Rs. 10347 to Rs. 14722',
        },
        {
            checkboxLabel: 'Rs. 6172 to Rs. 10347',
        },
        {
            checkboxLabel: 'Rs. 14522 to Rs. 18697',
        },
        {
            checkboxLabel: 'Rs. 10347 to Rs. 14522',
        },
        {
            checkboxLabel: 'Rs. 14522 to Rs. 18697',
        },
    ];

    const CATEGORIESLIST = [
        {
            checkboxLabel: 'Tshirts',
        },
        {
            checkboxLabel: 'Track Pants',
        },
        {
            checkboxLabel: 'Sports Shoes',
        },
        {
            checkboxLabel: 'Tights',
        },
        {
            checkboxLabel: 'Casual Shoes',
        },
        {
            checkboxLabel: 'Sweatshirts',
        },
        {
            checkboxLabel: 'Shorts ',
        },
        {
            checkboxLabel: 'Tops',
        },
    ];

    const COLORLIST = [
        {
            checkboxLabel: 'Black',
        },
        {
            checkboxLabel: 'White',
        },
        {
            checkboxLabel: 'Blue',
        },
        {
            checkboxLabel: 'Pink',
        },
    ];

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
                            {GENDERLIST.map((gender) => (
                                <Checkbox
                                    checkboxLabel={gender.checkboxLabel}
                                />
                            ))}
                        </div>
                        <div className="checkbox-main-wrap clearfix">
                            <h4>Price</h4>
                            {PRICELIST.map((price) => (
                                <Checkbox
                                    checkboxLabel={price.checkboxLabel}
                                />
                            ))}
                        </div>
                        <div className="checkbox-main-wrap clearfix">
                            <h4>Categories</h4>
                            {CATEGORIESLIST.map((categories) => (
                                <Checkbox
                                    checkboxLabel={categories.checkboxLabel}
                                />
                            ))}
                        </div>
                        <div className="checkbox-main-wrap clearfix">
                            <h4>Color</h4>
                            {COLORLIST.map((color) => (
                                <Checkbox
                                    checkboxLabel={color.checkboxLabel}
                                />
                            ))}
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