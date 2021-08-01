import styled from 'styled-components';


export const CarouselItemContainer = styled.div`
    
        width:100%;
        height: auto;
        background-size: cover;
        
    img {
        width: 100%;
        height: 500px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        
    }
`;

export const TitleContainer = styled.div`
    height: 100px;
    //margin : 0 auto;
    //background-color: ${ props => props.theme.palette.secondary.light};
    //margin: 20px 0;
    h1{
        text-align: center;
        margin: 0;
        padding: 15px;
        color: ${ props => props.theme.palette.secondary.dark};
    }
`