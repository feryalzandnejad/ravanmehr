import React from 'react';
import { HomepageContainer} from './homepage.styles';
import CarouselContainer from '../../components/welcom-picture/welcom-picture.component';
import ShopNow from '../../components/shop-now/shop-now.component';
import Recommend from '../../components/recommended/recommended.component';
//import SimpleCard from '../../components/cardContainer/cardContainer.component';

const HomePage = () => (
    <HomepageContainer>
        <CarouselContainer />
        <Recommend />
        <ShopNow />
    </HomepageContainer>
);


export default HomePage;