import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItems from '../welcome-carousel-items/welcome-carousel-items.component';

function CarouselContainer(props) {
    const data  = [
        {
            
            imgSrc: '/1.jpg',
            imgAlt: 'makeup'
        },
        {
            
            imgSrc: '/2.jpg',
            imgAlt: 'makeup'
        },
        {
            
            imgSrc: '/2.jpeg',
            imgAlt: 'makeup'
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