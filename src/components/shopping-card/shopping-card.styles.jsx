import styled from 'styled-components';

export const ShopCartContainer =styled.div`
    width: 316px;
    height: 440px;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 4px 6px 0 rgba(0,0,0.2,0.6);
    border-radius: 4px;
    color: ${ props => props.theme.palette.secondary.dark};
    top:40px;
    right: 16px;
    z-index: 5;
`;

export const CardBody = styled.div`
    height:240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    color: ${ props => props.theme.palette.secondary.dark};
`;

export const ButtonContainer= styled.div`
    text-align: center;
    margin-top: auto;
    margin-bottom: 30px;
    span{
        font-size: 16px;
    }
`;