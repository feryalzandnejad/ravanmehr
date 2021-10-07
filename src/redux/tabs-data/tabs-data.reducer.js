import DataActionTypes from './tabs-data.types.js';

const INITIAL_STATE = {
    data: [
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
};

const tabsdataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DataActionTypes.SET_CURRENT_DATA:
            return {
                ...state
            }
        default:
            return state;
    }
};

export default tabsdataReducer;