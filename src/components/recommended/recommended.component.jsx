import React from 'react';
import CardCarousel from'../card-items-carousel/card-items-carousel.component';
import {RecommendContainer, RecommendText} from './recommended.styles';

const Recommend = () => {
    return (
        <RecommendContainer>
            <RecommendText> RECOMMENDED FOR YOU </RecommendText>
            <CardCarousel />
        </RecommendContainer>
    )
};

export default Recommend;