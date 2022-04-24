import React, { Fragment } from 'react';
import './right-prof-block.scss';
import profimg from '../../assets/images/prof-img.png';

const RightProfBlock = props => {
    return (
        <div className="right-prof-block">
            <a href="#" className='prof-img'>
                <img src={profimg} />
            </a>
            <span className="prof-name">John Paul
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 5L0 0L9 6.16899e-07L4.5 5Z" fill="#041131" />
                </svg>
            </span>
        </div>
    )
}

export default RightProfBlock;