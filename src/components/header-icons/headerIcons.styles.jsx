import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    width: 100%;
    height: 40px;
    line-height: 2.5rem;
    background-color: ${ props => props.theme.palette.primary.main};
    z-index: 2000;
    top:0;
`;