import styled from 'styled-components';
import Button from '@material-ui/core/Button';



export const UserbuttonContainer = styled(({...props}) => <Button variant="outlined" color="secondary" size="small" {...props} />)`
    background-color: ${ props => props.theme.palette.secondary.light};
    color:  ${ props => props.theme.palette.secondary.main};
    font-weight: 1000;
    margin-left: 20px;
    
`;