import React from 'react';
import OutlinedButtons from '../userButton/userButton.componenet';
import {FullCardContainer, CardBody, ImageContainer, ContentContainer, PriceContainet} from './card.styles';


const CardContainer = ({imgSrc, imgAlt, content, price}) => {
    console.log(`this is price:${price}`)
    return(
        <FullCardContainer> 
            <ImageContainer>
                <img src={imgSrc} alt={imgAlt} />
            </ImageContainer>
            <CardBody>
                <ContentContainer>{content}</ContentContainer>
                <PriceContainet>{price}</PriceContainet>
                <OutlinedButtons>ADD TO BAG</OutlinedButtons>
            </CardBody>
        </FullCardContainer>
    )
};
                

export default CardContainer;