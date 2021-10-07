import styled from 'styled-components';

export const MainContainer = styled.div`
    margin: 120px 0;
    border: 1px solid;
    width: 70%;
    margin-left: 90px;
    
`;

export const SigninHeader = styled.div`
    height: 60px;
    line-height: 60px;
    text-align: left;
    width:100%;
    margin-left:38px;
    font-size:22px;
    color: ${ props => props.theme.palette.secondary.dark};
`;

export const SignupHeader = styled.div`
    height: 60px;
    line-height: 60px;
    text-align: left;
    width:100%;
    margin-left:38px;
    font-size: 22px;
    color: ${ props => props.theme.palette.secondary.dark};
`;

