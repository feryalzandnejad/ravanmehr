import styled from 'styled-components';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';




export const LocalMallOutlinedIconContainer = styled(({...props}) => <LocalMallOutlinedIcon  {...props} />)`
     color: ${ props => props.matchesMd ? 'white' : 'black'};
     cursor: pointer;
     
`;