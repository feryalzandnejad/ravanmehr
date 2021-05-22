import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SigninSignupContainer, TabsContainer,TabPanelContainer,MainContainer   } from './signin-and-signup-mobileMode.styles';




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <TabPanelContainer
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </TabPanelContainer>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MainContainer>
            <SigninSignupContainer>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <TabsContainer value={value} onChange={handleChange} aria-label="scrollable auto tabs example">
                        <Tab label="ورود" {...a11yProps(0)} />
                        <Tab label="ثبت نام" {...a11yProps(1)} />
                    </TabsContainer>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <SignIn />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SignUp />
                </TabPanel>
            </div>
            </SigninSignupContainer>
        </MainContainer>
    );
}