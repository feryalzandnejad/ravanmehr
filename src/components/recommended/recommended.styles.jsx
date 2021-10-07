import styled from 'styled-components';

export const RecommendContainer = styled.div`
    width:100%;
    height:700px;
    background-color: rgb(245,238,235);
`;

export const RecommendText = styled.div`
    text-align: center;
    font-size: 2rem;
    padding-top:20px;
    color:${ props => props.theme.palette.secondary.dark};
`;