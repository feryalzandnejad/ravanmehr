import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {LocalMallOutlinedIconContainer} from './shoppingbag-icon.styles';
import {connect} from 'react-redux';
import { SelectCartItemscount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CustomizedBadges = ({itemCount}) =>  {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={itemCount} color="primary">
        <LocalMallOutlinedIconContainer />
      </StyledBadge>
    </IconButton>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: SelectCartItemscount
});

export default connect(mapStateToProps)(CustomizedBadges);