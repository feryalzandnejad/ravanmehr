import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { ReactComponent as Logo } from '../../assets/logo.svg';



export const AppBarContainer = styled(({...props}) => <AppBar position="fixed" color="default" {...props} />)`
    background-color: ${ props => props.theme.palette.primary.light};
    width: 100%;
    height: 80px;
    display: flex !important;
    flex-direction: row-reverse;
    justify-content:space-around;
    opacity: 1;
    padding: ${props => props.xs === 'true' ? '20px' : null};
    font-family: 'Gandom';

    `;

export const TabsContainer = styled(({...props}) => <Tabs indicatorColor="primary" textColor="primary" variant="fullWidth" {...props} />)`
    
     span {
        font-size: 0.8rem !important;
        font-family: 'Gandom';
        color:  ${ props => props.theme.palette.primary.main};
     }

     div {
         display:flex;
         flex-direction:row-reverse;
         justify-content:space-between;
     }
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

