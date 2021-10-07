import React from 'react';

import OutlinedButtons from '../userButton/userButton.componenet';
import {ShopCartContainer, CardBody, ButtonContainer} from './shopping-card.styles';


const ShoppingCard = () => (
    <ShopCartContainer>
        <CardBody/>
        <ButtonContainer>
            <OutlinedButtons bottunColor='black' >CONTINUE SHOPPING</OutlinedButtons>
        </ButtonContainer>
    </ShopCartContainer>
);

export default ShoppingCard; 