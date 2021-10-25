import React from 'react';

import { CheckoutItemContainer,ImageContainet, ContentContainer, QuantityContainet, PriceContainet, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({cartItem: {content,imgSrc,price,quantity,imgAlt}}) => (
    <CheckoutItemContainer>
        <ImageContainet>
            <img width= '150px' height='150px' src={imgSrc} alt={imgAlt} />
        </ImageContainet>
        <ContentContainer>{content}</ContentContainer>
        <QuantityContainet>{quantity}</QuantityContainet>
        <PriceContainet>{price}</PriceContainet>
        <RemoveButton>&#10005;</RemoveButton>
    </CheckoutItemContainer>
)

export default CheckoutItem;