import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { toggleUserCartHidden } from '../../redux/user/user.actions';
import { NavigationContainer, PersonIconContainer} from './navigation.styles';
import SignInCart from '../card-dropdown/card-dropdown.component';
import ShoppingCard from '../shopping-card/shopping-card.component';
import CustomizedBadges from '../shoppinngbag-icon/shoppingbag-icon.component';
import { withRouter } from 'react-router-dom';
import {selectUserHidden} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';


const Navigation = ({matchesMd, toggleCartHidden, cart, profile, toggleUserCartHidden}) => (
    <NavigationContainer >
        <div onClick={toggleUserCartHidden}>

            <PersonIconContainer matchesMd={matchesMd} />
            {   
                
                profile ? null : <SignInCart/> 
            } 
        </div>
        <div onClick={toggleCartHidden}>
            <CustomizedBadges matchesMd={matchesMd}/>
            {
                cart ? null : <ShoppingCard/> 
            } 
        </div>
       
    </NavigationContainer>

);


const mapStateToProps = createStructuredSelector({
    cart: selectCartHidden,
    profile: selectUserHidden
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    toggleUserCartHidden: () => dispatch(toggleUserCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));