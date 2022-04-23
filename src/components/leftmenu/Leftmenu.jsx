import React, { Fragment } from 'react';
import Logo from '../logo/Logo';
import Submenu from '../submenu/Submenu';
import './leftmenu.scss';

const Leftmenu = props => {
    return (
        <div className='leftmenu'>
            <Logo />
            <Submenu />
        </div>
    )
}

export default Leftmenu;