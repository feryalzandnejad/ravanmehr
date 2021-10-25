import styled from 'styled-components';

export const CardBodyContainer = styled.div`
    width: 100%;
    min-height:100px;
    max-height:100px;
    display: flex;
    overflow: scroll !important;
    color: ${ props => props.theme.palette.secondary.dark};
    margin-bottom: 15px;
    padding: 20px 20px 0px 20px;
    font-size: 16px;
    img{
        width: 40%;
    }
`;

export const SpanCantainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px 10px 40px;
`;