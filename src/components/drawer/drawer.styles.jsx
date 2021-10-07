import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
    display: flex;
`;

export const ListItemContainer = styled(ListItem)`
    display: flex;
    justify-content: space-between;
`;

export const ButtonContainer = styled(Button)`
    height: 5rem;
    color: ${ props => props.theme.palette.primary.main} !important;
`;