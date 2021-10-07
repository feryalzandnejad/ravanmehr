import React from 'react';
import { HeaderContainer } from './headerIcons.styles';
import Navigation from '../navigation/navigation.component';

const HeaderIcons = ({matchesMd}) => (
    <HeaderContainer>
        <div>Logo</div> 
        <div>
            <span>Online Shop</span>
        </div>
        <Navigation matchesMd={matchesMd} />
    </HeaderContainer>
);

export default HeaderIcons;