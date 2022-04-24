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
            count: '10',
        },
        {
            checkboxLabel: 'Women',
            count: '10',
        },
        {
            checkboxLabel: 'Boys',
            count: '10',
        },
        {
            checkboxLabel: 'Girls',
            count: '10',
        },
    ];

    const PRICELIST = [
        {
            checkboxLabel: 'Rs. 1997 to Rs. 6172',
            count: '9',
        },
        {
            checkboxLabel: 'Rs. 10347 to Rs. 14722',
            count: '33',
        },
        {
            checkboxLabel: 'Rs. 6172 to Rs. 10347',
            count: '25',
        },
        {
            checkboxLabel: 'Rs. 14522 to Rs. 18697',
            count: '18',
        },
        {
            checkboxLabel: 'Rs. 10347 to Rs. 14522',
            count: '105',
        },
        {
            checkboxLabel: 'Rs. 14522 to Rs. 18697',
            count: '22',
        },
    ];

    const CATEGORIESLIST = [
        {
            checkboxLabel: 'Tshirts',
            count: '106',
        },
        {
            checkboxLabel: 'Track Pants',
            count: '156',
        },
        {
            checkboxLabel: 'Sports Shoes',
            count: '174',
        },
        {
            checkboxLabel: 'Tights',
            count: '5',
        },
        {
            checkboxLabel: 'Casual Shoes',
            count: '106',
        },
        {
            checkboxLabel: 'Sweatshirts',
            count: '156',
        },
        {
            checkboxLabel: 'Shorts ',
            count: '174',
        },
        {
            checkboxLabel: 'Tops',
            count: '5',
        },
    ];

    const COLORLIST = [
        {
            checkboxLabel: 'Black',
            count: '106',
        },
        {
            checkboxLabel: 'White',
            count: '156',
        },
        {
            checkboxLabel: 'Blue',
            count: '174',
        },
        {
            checkboxLabel: 'Pink',
            count: '5',
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
                                    count={gender.count}
                                />
                            ))}
                        </div>
                        <div className="checkbox-main-wrap clearfix">
                            <h4>Price</h4>
                            {PRICELIST.map((price) => (
                                <Checkbox
                                    checkboxLabel={price.checkboxLabel}
                                    count={price.count}
                                />
                            ))}
                        </div>
                        <div className="checkbox-main-wrap clearfix">
                            <h4>Categories</h4>
                            {CATEGORIESLIST.map((categories) => (
                                <Checkbox
                                    checkboxLabel={categories.checkboxLabel}
                                    count={categories.count}
                                />
                            ))}
                        </div>
                        <div className="checkbox-main-wrap clearfix">
                            <h4>Color</h4>
                            {COLORLIST.map((color) => (
                                <Checkbox
                                    checkboxLabel={color.checkboxLabel}
                                    count={color.count}
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