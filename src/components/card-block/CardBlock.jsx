import React, { Fragment } from 'react';
import CardSet from '../card-set/CardSet';
import './cardblock.scss';

const CardBlock = props => {
    return (
        <div className='card-block-wrap clearfix'>
            <CardSet/>
            <CardSet/>
            <CardSet/>
            <CardSet/>
            <CardSet/>
            <CardSet/>
            <CardSet/>
            <CardSet/>
        </div>
    )
}

export default CardBlock;