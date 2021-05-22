import React from 'react';
import {CarouselItemContainer} from './carousel-items.styles';

const CarouselItems = ({title, content, imgSrc, imgAlt}) => {
    
    return (
        <CarouselItemContainer>
            <h1>{title}</h1>
            <div>{content}</div>
            <img src={imgSrc} alt={imgAlt} />
        </CarouselItemContainer>
    )
};

export default CarouselItems;
