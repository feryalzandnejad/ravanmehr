import styled from 'styled-components';
import Button from '@material-ui/core/Button';



export const UserbuttonContainer = styled(({...props}) => <Button variant="outlined" size="small" {...props} />)`
    background-color: ${ props => props.bottunColor === 'black' ? props.theme.palette.primary.light : props.theme.palette.common.white} !important;
    color:  ${ props => props.bottunColor === 'black' ? props.theme.palette.common.white : props.theme.palette.secondary.main} !important;
    font-weight: 1000;
    margin-left: 20px;
    
`;