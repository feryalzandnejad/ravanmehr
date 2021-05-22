import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';



export const AppBarContainer = styled(({...props}) => <AppBar position="fixed" color="default" {...props} />)`
    background-color: ${ props => props.theme.palette.primary.light};
    width: 100%;
    display: flex !important;
    flex-direction:row;
    justify-content:space-between;
    opacity: 1;
    padding: ${props => props.xs === 'true' ? '20px' : null};
    font-family: 'Gandom';

    `;

export const TabsContainer = styled(({...props}) => <Tabs indicatorColor="primary" textColor="primary" variant="fullWidth" {...props} />)`
    
     span {
        font-size: 1.2rem !important;
        font-family: 'Gandom';

     }

     div {
         display:flex;
         flex-direction:row-reverse;
         justify-content:space-between;
     }
 `;


export const Insta = styled.div`
    width: 40px;
    margin-left : 20px;
`;

export const InstaLink = styled(Link)`
    display: flex;
    right:0;
    justify-content: center;
    padding-top: 15px;
    width:20px;
`;

export const LogoInsta = styled(Logo)`
    width:20px;
    height:20px;
`;


export const UserAcount = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Gandom';

`;

export const Drawer = styled.div`
padding-left : 10px;
`;

