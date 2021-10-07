import React from 'react';
import { withRouter } from "react-router-dom";
import {PicContainer, Picture, TextContainer, FirtText, SecondText} from './shop-now.styles';

const ShopNow = ({history}) => {
    const handleClick = () => {
        history.push('/Makeup')
    }
    return (
        <PicContainer onClick={() => handleClick()}>
            <Picture>
                <TextContainer>
                    <FirtText>DISCOVER EVEN MORE</FirtText>  
                    <SecondText>shop our favorite lip, face and eye products</SecondText>
                </TextContainer>
            </Picture>  
        </PicContainer>       
    )
};

export default withRouter(ShopNow);