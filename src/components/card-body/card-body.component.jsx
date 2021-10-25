import React from 'react';
import Divider from '@material-ui/core/Divider';

import { CardBodyContainer, SpanCantainer} from './card-body.styles';

const CardBody = ({item:{imgSrc, imgAlt, content, price, quantity} }) => (
    <CardBodyContainer>
        <img src={imgSrc} alt={imgAlt} />
        <SpanCantainer> 
            <span>{content}</span>
            <span>({quantity}){price}$</span>
        </SpanCantainer>
        <Divider variant="middle" />
    </CardBodyContainer>
);

export default CardBody;