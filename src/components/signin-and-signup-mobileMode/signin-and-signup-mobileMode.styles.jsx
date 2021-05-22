import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';


export const MainContainer = styled.div`
    width: auto;
    height: auto;
    //background-color: ${ props => props.theme.palette.secondary.dark};
    padding: 45px 0;

`


export const SigninSignupContainer = styled.div`
   width : 400px;
   margin : 80px auto;

   
`

export const TabsContainer = styled(({...props}) => <Tabs indicatorColor="secondary" textColor="primary" variant="scrollable" scrollButtons="auto" {...props} />)`
    display: flex;
    justify-content : center;
    padding-left: 40px;
    background-color: ${ props => props.theme.palette.primary.light};
    color: ${ props => props.theme.palette.secondary.dark};
    
`

export const TabPanelContainer = styled.div`
 text-align: center;
 border: 1px solid ${ props => props.theme.palette.secondary.light};
 border-top:none;
 border-bottom-right-radius: 10px;
 border-bottom-left-radius: 10px;
 h4{
        text-align: right;
        margin-right : 0;
        margin-left:60px;
    }
`

