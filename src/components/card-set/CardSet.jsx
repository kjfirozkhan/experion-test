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
            <CardSetImg image={props.image}/>
            <HeartIconCart is_favorite={props.is_favorite}/>
            <CardSetText title={props.title} description={props.description} price={props.price}/>
            <AddToCartBtn />
        </div>
    )
}

export default CardSet;