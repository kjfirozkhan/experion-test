import React, { Fragment } from 'react';
import Logo from '../logo/Logo';
import './headerRightBlock.scss';
import SearchInput from '../searchinput/SearchInput';
import HeartIcon from '../heartIcon/HeartIcon';
import CartIcon from '../cartIcon/CartIcon';
import RightProfBlock from '../rightprofblock/RightProfBlock';

const HeaderRightBlock = props => {
    return (
        <div className='headerRightBlock'>
            <SearchInput />
            <HeartIcon />
            <CartIcon />
            <RightProfBlock/>
        </div>
    )
}

export default HeaderRightBlock;