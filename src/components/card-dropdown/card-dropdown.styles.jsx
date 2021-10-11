import styled from 'styled-components';


export const CardDropdownContainer = styled.div`
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
    overflow: scroll;
`;

export const SigninText = styled.div`
    font-size: 30px;
    margin-left:40px;
    margin-top: 20px;;
`;

export const CreateaccountContainer = styled.div`
    text-align: center;
    margin: 20px 0;
    span{
        font-size: 16px;
    }
`;

export const Title = styled.span`
    color: ${ props => props.theme.palette.secondary.dark};
`;