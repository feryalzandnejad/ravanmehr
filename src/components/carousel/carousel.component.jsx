import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItems from '../carousel-items/carousel-items.component';


function CarouselContainer(props) {
    const data  = [
        {
            title: 'مشاوره کودک',
            content: 'some content',
            imgSrc: '/child-counselling.png',
            imgAlt: 'child counselling'
        },
        {
            title: 'زوج درمانی',
            content: 'some content',
            imgSrc: '/couples-therapy.png',
            imgAlt: 'couples therapy'
        },
        {
            title: 'مشاوره خانواده',
            content: 'some content',
            imgSrc: '/family-counselling.png',
            imgAlt: 'family counselling'
        }
    ]

    return (
        <Carousel>
            {
                data.map((item, index) => <CarouselItems key={index} title={item.title} imgSrc={item.imgSrc} content={item.content} imgAlt={item.imgAlt}/> )
            }
        </Carousel>
    )
};

export default CarouselContainer;
