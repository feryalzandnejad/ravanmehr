import styled from 'styled-components';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PersonIcon from '@material-ui/icons/Person';

export const NavigationContainer = styled(({...props}) => <div {...props} />)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100px;
`;

export const PersonIconContainer = styled(({...props}) => <PersonIcon  {...props} />)`
    color: ${ props => props.matchesMd ? 'white' : 'black'};
    cursor: pointer;
    margin-top: 8px;
`;

export const LocalMallOutlinedIconContainer = styled(({...props}) => <LocalMallOutlinedIcon  {...props} />)`
     color: ${ props => props.matchesMd ? 'white' : 'black'};
     cursor: pointer;
     
`;
