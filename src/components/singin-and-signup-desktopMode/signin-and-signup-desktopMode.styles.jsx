import styled from 'styled-components';

export const SigninAndSignup = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    width: 850px;
    border: 1px solid ;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: white;
    h4{
        text-align: right;
    }
    `;

export const UserPanel = styled.div`
    margin: 80px auto;
    margin-bottom: 0 !important;
    display:flex;
    justify-content:space-around;
    width:850px;
    border: 1px solid black;
    border-bottom: none;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: ${ props => props.theme.palette.primary.light};
    color: ${ props => props.theme.palette.secondary.dark};

    
`;

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${ props => props.theme.palette.secondary.dark};
    padding: 45px 0;
`;
