import styled from 'styled-components';


export const CarouselItemContainer = styled(({...props}) => <div {...props} />)`
    
        width:100%;
        height: auto;
        background-size: cover;
        margin-top: 30px;
    img {
        width: 100%;
        height: 600px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;   
    }
`;


