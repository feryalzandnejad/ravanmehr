import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import HeaderIcons from '../header-icons/headerIcons.component';
import FullWidthTabs from '../full-width-tabs/full-width-tabs.component';


const Header = () => {
    
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    
    return (
        <React.Fragment>
            {
                matchesMd ? null : <HeaderIcons matchesMd={matchesMd}/>
            }
            <FullWidthTabs matchesMd={matchesMd}/>           
        </React.Fragment>
        
    )
};

export default Header;
