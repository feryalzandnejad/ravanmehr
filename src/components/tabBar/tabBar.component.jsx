import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import { AppBarContainer, Insta, TabsContainer,InstaLink, LogoInsta, UserAcount,Drawer   } from './tabBar.styles';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import OutlinedButtons from '../userButton/userButton.componenet';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableTemporaryDrawer from '../quickLinks/quickLinks.component';



  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      //backgroundColor: theme.palette.background.paper,
      //width: 1400,
    },
  }));
  
  export default function FullWidthTabs({currentUser}) {
  
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
     const [tabItems, setTabItems] = React.useState(
         [
           {
             title: 'خانه',
             link: '/' 
           },
           {
            title: 'خدمات',
            link: '/services' 
          },
          {
            title: ' مشاوره انلاین',
            link: '/onlineServices' 
          },
          {
            title: 'تماس با ما',
            link: '/contactUs' 
          }
         ]
     )
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));



  
    return (  
      <div className={classes.root}>
        <AppBarContainer position='fixed' xs='false' >
          <UserAcount>
            
              {
                currentUser ?
                <OutlinedButtons onClick={() => auth.signOut()}>خروج</OutlinedButtons>
                :
                <OutlinedButtons to='/signin'>ورود</OutlinedButtons>
              }
            
            <Insta>
              <InstaLink to="/https://instagram.com/ravanmehr.psychology?igshid=1qxf9tx444cv2" >
                <LogoInsta />
              </InstaLink>
            </Insta>
          </UserAcount>
          <TabsContainer sm={matchesSm} value={value} onChange={handleChange} aria-label="full width tabs example">

            <Drawer>
              
              <SwipeableTemporaryDrawer />

              
            </Drawer>
            
              {
                matchesSm ?

                null
                  :
                  tabItems.map((item, index) => (
                      <Tab component={Link} to={item.link} label={item.title} {...a11yProps(index)} key={index} />
                  ))
              }
          </TabsContainer>
        </AppBarContainer>
        
      </div>
      
      
    );
  }