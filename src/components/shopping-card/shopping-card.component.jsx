import React from 'react';
import {connect} from 'react-redux';
import OutlinedButtons from '../userButton/userButton.componenet';
import CardBody from '../card-body/card-body.component';
import {ShopCartContainer, ButtonContainer, CardContainer, CartEmty} from './shopping-card.styles';
import { withRouter } from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';



const ShoppingCard = ({ cartItems, history }) => (
    <ShopCartContainer>
        <CardContainer>
        {
            cartItems.length ? (
            cartItems.map(cartItem => <CardBody key={cartItem.id} item={cartItem}/>)
            )
            : 
            (
            <CartEmty>Your cart is empty </CartEmty>
            )}   
        </CardContainer>
        <ButtonContainer>
            <OutlinedButtons onClick={() => history.push('/checkout')} bottunColor='black' >CONTINUE SHOPPING</OutlinedButtons>
        </ButtonContainer>
    </ShopCartContainer>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(ShoppingCard)); 