import React from 'react';

import {MainCardContainer, TitleText} from './cardContainer.styles';

import CardItems from '../../components/card-Item/card-Item.component';

  

export default function SimpleCard() {
    const data = [
        {
            title : 'title 1',
            content: 'By default, we use the combination of a <div> element and a background  a <div> element and a background'
        },
        {
            title : 'title 2',
            content: 'content'
        },  
        {
            title : 'title 3',
            content: 'content'
        },
        {
            title : 'title 4',
            content: 'content'
        },
        {
            title : 'title 5',
             content: 'content'
        },
        {
             title : 'title 6',
            content: 'content'
        },
        {
            title : 'title 7',
           content: 'content'
       }
    ]

return (
    
    <MainCardContainer>
        {/* <TitleText>
            <h2> برخی از خدمات روان مهر </h2>
        </TitleText> */}
    
        {
            data.map((item,index) => <CardItems key={index} title={item.title} content={item.content} />) 
        }
    
    </MainCardContainer>
  );
}


