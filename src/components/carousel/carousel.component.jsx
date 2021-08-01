import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItems from '../carousel-items/carousel-items.component';

function CarouselContainer(props) {
    const data  = [
        {
            
            imgSrc: '/1.jpg',
            imgAlt: 'child counselling'
        },
        {
            
            imgSrc: '/couples-therapy.png',
            imgAlt: 'couples therapy'
        },
        {
            
            imgSrc: '/family-counselling.png',
            imgAlt: 'family counselling'
        }
    ]

    return (
        <Carousel>
            {
                data.map((item, index) => <CarouselItems key={index} imgSrc={item.imgSrc} imgAlt={item.imgAlt}/> )
            }
        </Carousel>
    )
};

export default CarouselContainer;
