import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { AppBarContainer, ToolBarContainer, TabsContainer, TabItems} from './full-width-tabs.styles';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import SwipeableTemporaryDrawer from '../drawer/drawer.component';
import Navigation from '../navigation/navigation.component';



  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  
  const FullWidthTabs = ({currentUser, matchesMd, data}) => {
  console.log(data)
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


  
    return (  
      <div>
        <AppBarContainer xs='false' position='fixed' matchesMd={matchesMd} >
          <ToolBarContainer matchesMd={matchesMd}>
            <SwipeableTemporaryDrawer />
            { 
              matchesMd ?
              <React.Fragment>
                <div>logo</div>
                <Navigation matchesMd={matchesMd} />
              </React.Fragment>
              :
              <TabsContainer value={value} onChange={handleChange} aria-label="full width tabs example"> 
                {
                  data.map((item, index) => (
                      <TabItems component={Link} to={item.link} label={item.title} {...a11yProps(index)} key={index} />
                  ))
                }         
              </TabsContainer>
            }
          </ToolBarContainer>
        </AppBarContainer>   
      </div>   
    );
  };

  const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    data: state.tabsData.data
  });
  

  export default connect(mapStateToProps)(FullWidthTabs);