import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import { ReactComponent as Logo } from '../../assets/logo.svg';



export const AppBarContainer = styled(({...props}) => <AppBar position="fixed" {...props} />)`
    background-color: ${ props => props.theme.palette.primary.light} !important;
    width: 100%;
    `;

export const ToolBarContainer = styled(({...props}) => <Toolbar {...props} disableGutters />)`
    display: flex;
    height: 5.75rem;
    justify-content: ${props => props.matchesMd ? 'space-between' : 'flex-start'};
    margin-top: ${props => props.matchesMd ? '0px' : '30px'};
`;

export const TabsContainer = styled(({...props}) => <Tabs indicatorColor="primary" textColor="primary" variant="fullWidth" {...props} />)`
 
    span {
        font-size: 0.9rem !important;
        line-height: 5rem;
        color:  ${ props => props.theme.palette.primary.main};
        text-transform: none;
    }
    a {
        width: 100px;
    }
 `;

 export const TabItems = styled(Tab)`
    min-width: 140px !important;
    padding: 0;
 `;



export const LogoInsta = styled(Logo)`
    width:20px;
    height:20px;
`;


export const UserAcount = styled.div`
    display: flex;
    justify-content: space-between;

`;

