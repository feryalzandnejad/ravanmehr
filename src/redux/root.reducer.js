import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import tabsdataReducer from './tabs-data/tabs-data.reducer';
import cartReducer from './cart/cart.reducer';


export default combineReducers ({
    user : userReducer,
    tabsData: tabsdataReducer,
    cart: cartReducer
});