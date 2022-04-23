import React, { Fragment } from 'react';
import HeaderRightBlock from '../headerRightBlock/HeaderRightBlock';
import './header.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

const Header = props => {
    return (
        <header className='header'>
            <h1>Hi John!</h1>
            <HeaderRightBlock/>
        </header>
    )
}

export default Header;