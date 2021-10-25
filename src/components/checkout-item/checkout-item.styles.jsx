import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    //min-height: 100px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgray;
    span {
        padding-top: 65px;
    }
`;

export const ImageContainet = styled.div`
    width: 15%;
    img{
       
        padding: 15px 0;
        size: cover;
    }
`;

export const ContentContainer =styled.span`
    width: 15%;
`;


export const QuantityContainet = styled.span`
     width: 15%;
`;



export const PriceContainet = styled.span`
     width: 15%;
`;

export const RemoveButton = styled.div`
    padding-top: 65px;
`;