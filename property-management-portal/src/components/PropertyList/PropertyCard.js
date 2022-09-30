import { Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, IconButton, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function PropertyCard(props) {
    console.log(props);

    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    const cardClicked = () => {
        console.log("Card clicked")
    }

    const favIconClicked = (e) => {
        console.log("Fav icon clicked: ");
        console.log(e);
    }

    const expandClicked = () => {
        setExpanded(!expanded);
    }

    return (
        <div>
            <Card sx={{ minWidth: 300 }}>
                <Link key={props.id} to={`/property-detail/${props.id}`} state={{ background: location }}>
                    <CardActionArea onClick={cardClicked}>
                        <CardMedia component="img"
                            height="200"
                            image={props.mainPicture} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.formattedPrice} {props.numOfRoom} bds
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.location.street}, {props.location.city} {props.location.zipCode}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions disableSpacing>
                    <IconButton aria-label="Add to favorites" onClick={favIconClicked}>
                        <FavoriteIcon />
                    </IconButton>
                    <ExpandMore expand={expanded} onClick={expandClicked}
                        aria-expanded={expanded} aria-label="Show More">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {props.overview}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}