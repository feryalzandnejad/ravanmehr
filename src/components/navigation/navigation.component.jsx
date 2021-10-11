import React from 'react';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { toggleUserCartHidden } from '../../redux/user/user.actions';
import { NavigationContainer, PersonIconContainer, LocalMallOutlinedIconContainer } from './navigation.styles';
import SignInCart from '../card-dropdown/card-dropdown.component';
import ShoppingCard from '../shopping-card/shopping-card.component';


const Navigation = ({matchesMd, toggleCartHidden, cart, profile, toggleUserCartHidden}) => (
    <NavigationContainer >
        <div onClick={toggleUserCartHidden}>
            <PersonIconContainer matchesMd={matchesMd} />
            {
                profile ? null : <SignInCart/> 
            } 
        </div>
        <div onClick={toggleCartHidden}>
            <LocalMallOutlinedIconContainer matchesMd={matchesMd}/>
            {
                cart ? null : <ShoppingCard/> 
            } 
        </div>
       
    </NavigationContainer>

);


const mapStateToProps = state => ({
    cart: state.cart.hidden,
    profile: state.user.hidden
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    toggleUserCartHidden: () => dispatch(toggleUserCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);