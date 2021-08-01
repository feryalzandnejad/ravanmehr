import styled from 'styled-components';
import CardActions from '@material-ui/core/CardActions';

export const CarditemContainer = styled.div`
    width: 275px;
    height: 300px;
    margin: 40px 20px;
    background-color:white ;
    border-radius: 7px;
    border: 1px solid ${ props => props.theme.palette.secondary.light};
    box-sizing: border-box;
`;

export const CardTitle = styled.div`
    border: 1px solid ${ props => props.theme.palette.secondary.light};
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    h3{
        text-align: center;
}
    
`;

export const CardContent = styled.div`
    text-align: right;
    padding-right: 10px;
`;

export const ButtomContainer = styled(CardActions)`
    //padding-top: 40px;
`;