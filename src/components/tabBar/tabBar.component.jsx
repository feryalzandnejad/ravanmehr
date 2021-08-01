import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import { AppBarContainer, TabsContainer, UserAcount,Drawer} from './tabBar.styles';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
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
  
  const FullWidthTabs = ({currentUser}) => {
  
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
     const [tabItems, setTabItems] = React.useState(
         [
           {
             title: 'Home',
             link: '/' 
           },
           {
            title: 'Makeup',
            link: '/makeup' 
          },
          {
            title: 'Skincare',
            link: '/skincare' 
          },
          {
            title: 'Hair',
            link: '/contactUs' 
          },
          {
            title: 'Fragrance',
            link: '/contactUs' 
          },
          {
            title: 'Tools & Brushes',
            link: '/contactUs' 
          },
          {
            title: 'Bath & Body',
            link: '/contactUs' 
          },
          {
            title: 'Clean Beauty',
            link: '/contactUs' 
          },
          {
            title: 'Sale & Offers',
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
          {/* <UserAcount>
            
              {
                currentUser ?
                <OutlinedButtons onClick={() => auth.signOut()}>خروج</OutlinedButtons>
                :
                <OutlinedButtons to='/signin'>ورود</OutlinedButtons>
              }
            
          </UserAcount> */}
          <Drawer>
              
              <SwipeableTemporaryDrawer />

              
          </Drawer>
          <TabsContainer sm={matchesSm} value={value} onChange={handleChange} aria-label="full width tabs example">
            
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
  };

  const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  });

  export default connect(mapStateToProps)(FullWidthTabs);