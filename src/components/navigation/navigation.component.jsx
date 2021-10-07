import React from 'react';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { NavigationContainer, PersonIconContainer, LocalMallOutlinedIconContainer } from './navigation.styles';
import MouseOverPopover from '../card-dropdown/card-dropdown.component';
import ShoppingCard from '../shopping-card/shopping-card.component';


const Navigation = ({matchesMd, toggleCartHidden, cart}) => (
    <NavigationContainer >
        <MouseOverPopover>
            <PersonIconContainer matchesMd={matchesMd} />
        </MouseOverPopover>
        <div onClick={toggleCartHidden}>
            <LocalMallOutlinedIconContainer matchesMd={matchesMd}/>
            {
                cart ? null : <ShoppingCard/> 
            } 
        </div>
       
    </NavigationContainer>

);


const mapStateToProps = state => ({
    cart: state.cart.hidden
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);