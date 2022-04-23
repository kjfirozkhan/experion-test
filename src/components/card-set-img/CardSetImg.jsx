import React, { Fragment } from 'react';
import './cardsetimg.scss';
import image1 from '../../assets/images/img-1.jpg';

const CardSetImg = props => {
    return (
        <div className="img-block">
            <img src={image1} />
        </div>
    )
}

export default CardSetImg;