import React from 'react';
import {CarouselItemContainer, TitleContainer} from './carousel-items.styles';

const CarouselItems = ({title, imgSrc, imgAlt}) => {
    
    return (
        <CarouselItemContainer>
            <TitleContainer>
                <h1>{title}</h1>
            </TitleContainer>
            <img src={imgSrc} alt={imgAlt} />
        </CarouselItemContainer>

    )
};

export default CarouselItems;
