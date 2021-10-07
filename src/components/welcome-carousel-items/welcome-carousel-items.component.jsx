import React from 'react';
import {CarouselItemContainer} from './welcome-carousel-items.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles(theme => ({
//     img: {
//         height : "600px",
//         [theme.breakpoints.down('sm')] : {
//             height : "400px"
//         },
//         [theme.breakpoints.down('xs')] : {
//             height : "300px"
//         }
//     },
// }));

const CarouselItems = ({imgSrc, imgAlt}) => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    //const style = useStyles();
    
    return (
        <CarouselItemContainer xs={matchesXs} sm={matchesSm}>
            <img src={imgSrc} alt={imgAlt}/>
        </CarouselItemContainer>

    )
};

export default CarouselItems;
