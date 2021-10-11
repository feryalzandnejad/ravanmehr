import {UserActionTypes} from './user.types';

export const setCurrentUser = user => ({
    type : UserActionTypes.SET_CURRENT_USER,
    payload : user
});

export const toggleUserCartHidden= () => ({
    type: UserActionTypes.TOGGLE_USER_CART_HIDDEN
});