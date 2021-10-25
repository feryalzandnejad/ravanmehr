import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import {CheckOutContainer, CheckOutHeader} from './checkout.styles';

const CheckOut = ({cartItems, total}) => (
    
    <CheckOutContainer>
        <CheckOutHeader>
            <div>
                <span>Product</span>
            </div>
            <div>
                <span>Description</span>
            </div>
            <div>
                <span>Quantity</span>
            </div>
            <div>
                <span>price</span>
            </div>
            <div>
                <span>Remove</span>
            </div>
        </CheckOutHeader>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        
        <div>
            <span>TOTAL: ${total}</span>
        </div>
    </CheckOutContainer>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});


export default connect(mapStateToProps)(CheckOut);