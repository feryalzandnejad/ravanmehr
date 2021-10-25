import React from 'react';
import {connect} from 'react-redux';
import OutlinedButtons from '../userButton/userButton.componenet';
import { addItem } from '../../redux/cart/cart.actions';
import {FullCardContainer, CardBody, ImageContainer, ContentContainer, PriceContainet} from './card.styles';


const CardContainer = ({item, addItem}) => {
    const {imgSrc, imgAlt, content, price } = item;
    return(
        <FullCardContainer> 
            <ImageContainer>
                <img src={imgSrc} alt={imgAlt} />
            </ImageContainer>
            <CardBody>
                <ContentContainer>{content}</ContentContainer>
                <PriceContainet>${price}</PriceContainet>
                <OutlinedButtons onClick={() => addItem(item)}>ADD TO BAG</OutlinedButtons>
            </CardBody>
        </FullCardContainer>
    )
};


const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
});
                

export default connect(null, mapDispatchToProps)(CardContainer);