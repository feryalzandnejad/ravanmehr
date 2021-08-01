import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const MainCardContainer = styled(({...props}) => <Card textColor="primary"  {...props} />)`
    background-color:  #DBE6F6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #C5796D, #DBE6F6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #C5796D, #DBE6F6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    color: ${ props => props.theme.palette.secondary.main};
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap; 
    flex-direction: row-reverse;
    justify-content: space-around;
    overflow: auto;
    padding-top: 100px;
    
`;

export const TitleText = styled.div`
    display: block;
    color: red;
    text-align: center;
    height: 60px;
    h2{
        text-align: center;
        display: block;
    }
`;
