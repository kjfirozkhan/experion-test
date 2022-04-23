import { Button } from 'bootstrap';
import React, { Fragment } from 'react';
import AddToCartBtn from '../addtocart-btn/AddToCartBtn';
import CardSetImg from '../card-set-img/CardSetImg';
import CardSetText from '../card-set-text/CardSetText';
import HeartIconCart from '../heartIcon-cart/HeartIconCart';
import './cardset.scss';

const CardSet = props => {
    return (
        <div className="card-block">
            <CardSetImg />
            <HeartIconCart />
            <CardSetText />
            <AddToCartBtn />
        </div>
    )
}

export default CardSet;