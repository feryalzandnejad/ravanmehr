import CardContainer from '../card/card.component';
import {SliderContainer} from './card-items-carousel.styles';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

 
function CardCarousel() {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleSildeToShow = () => {
    if (matchesXs){
      return 1;
    } if (matchesSm){
      return 2;
    } else {
      return 3;
    }
  }
  
  const config = {
    infinite: true,
    speed: 500,
    slidesToShow: handleSildeToShow(),
    slidesToScroll: 1
  };
  
 
  const products = [
    {
      id: 1,
      imgSrc: '/carousel-homepage/13.jpg',
      imgAlt: 'makeup',
      content:'content',
      price: '25'
    },
    {
      id: 2,
      imgSrc: '/carousel-homepage/6.jpg',
      imgAlt: 'makeup',
      content:'',
      price: '25'
    },
    {
      id: 3,
      imgSrc: '/carousel-homepage/8.jpg',
      imgAlt: 'makeup',
      content:'',
      price: '25'
    },
    {
      id: 4,
      imgSrc: '/carousel-homepage/11.jpg',
      imgAlt: 'makeup',
      content:'',
      price: '25'
    },
    {
      id: 5,
      imgSrc: '/carousel-homepage/7.jpg',
      imgAlt: 'makeup',
      content:'',
      price: '25'
    },
    {
      id: 6,
      imgSrc: '/carousel-homepage/9.jpg',
      imgAlt: 'makeup',
      content:'',
      price: '25'
    },
    {
      id: 7,
      imgSrc: '/carousel-homepage/15.jpg',
      imgAlt: 'makeup',
      content:'',
      price: '25'
    },
    {
      id: 8,
      imgSrc: '/carousel-homepage/16.jpg',
      imgAlt: 'makeup',
      content:'',
      price: '25'
    },
    {
      id: 9,
      imgSrc: '/carousel-homepage/14.jpg',
      imgAlt: 'makeup',
      content:'',
      price: '25'
    },
    {
      id: 10,
      imgSrc: '/carousel-homepage/10.jpg',
      imgAlt: 'makeup',
      content:'',
      price: '25'
    }
  ]
 
  return (
    <SliderContainer>
      <Slider {...config}>
        {
        products.map((item) => <CardContainer key={item.id} item={item} />)
        }
      </Slider>
    </SliderContainer>
  )
};
 
export default CardCarousel;
