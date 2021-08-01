import React from 'react';

import { CarditemContainer, CardTitle, CardContent} from './card-Item.styles';
import TransitionsModal from '../../components/CardModal/CardModal.component';


const CardItems = ({title, content}) => {
    return (
        <CarditemContainer>
            <CardTitle>
                <h3>{title}</h3>
            </CardTitle>
            <CardContent>
                <p>{content}</p>
            </CardContent>
            <TransitionsModal  title={title} content={content}/>
        </CarditemContainer>
        
    )

}

export default CardItems;