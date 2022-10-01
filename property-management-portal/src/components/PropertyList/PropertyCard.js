import { Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, IconButton, Typography, Tooltip } from "@mui/material";
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded'; //unlist
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded'; //add list
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateListedProperty, deleteProperty } from 'services/PropertyService';
import { formatter } from "./PropertySearchList";
import { ConfirmDialog } from "../ConfirmDialog/ConfirmDialog";
import Constants from "Constants";

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
    const { roles, ...other } = props;
    const [expanded, setExpanded] = useState(false);
    const [property, setProperty] = useState(other);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [agree, setAgree] = useState(false);

    const location = useLocation();

    const dispatch = useDispatch();

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

    const handleListedAction = () => {
        dispatch(updateListedProperty({ id: property.id, listed: !property.listed }))
            .then((response) => {
                setProperty({
                    ...property,
                    listed: !property.listed
                });
            });
    }

    const handleDeleteAction = () => {
        setOpenConfirm(true);
    }

    const agreeDialog = () => {
        setAgree(true);
        setOpenConfirm(false)
    }

    useEffect(() => {
        if (agree) {
            dispatch(deleteProperty(property.id))
            .then(() => {
                setProperty({
                    ...property,
                    deleted: true
                });
                if (typeof props.deletedFunc === 'function') {
                    props.deletedFunc(property.id);
                }
            });
        }
    }, [agree])

    const handleEditAction = () => {
        //
    }

    return (
        property.deleted === false && 
        <div>
            <Card sx={{ minWidth: 300 }}>
                <Link key={property.id} to={`/property-detail/${property.id}`} state={{ background: location }}>
                    <CardActionArea onClick={cardClicked}>
                        <CardMedia component="img"
                            height="200"
                            image={property.mainPicture || property.pictures[0]} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {property.formattedPrice ? property.formattedPrice : formatter.format(property.price)} - {property.numOfRoom} bds
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {property.location.street}, {property.location.city} {property.location.zipCode}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions disableSpacing>
                    {
                        (roles.includes(Constants.OWNER_ROLE) !== true && roles.includes(Constants.ADMIN_ROLE) !== true) && 
                        <Tooltip title="Add to favorites">
                            <IconButton onClick={favIconClicked}>
                                <FavoriteIcon />
                            </IconButton>
                        </Tooltip>
                    }
                    {
                        roles.includes(Constants.OWNER_ROLE) === true &&
                        <Tooltip title={property.listed === true ? "Unlist this property" : "Add list this property"}>
                            <IconButton
                                onClick={handleListedAction}>
                                {
                                    property.listed === true &&
                                    <PlaylistAddCheckRoundedIcon />
                                }
                                {
                                    property.listed === false &&
                                    <PlaylistAddRoundedIcon />
                                }
                            </IconButton>
                        </Tooltip>
                    }
                    {
                        roles.includes(Constants.OWNER_ROLE) === true &&
                        <Tooltip title="Edit this propery">
                            <IconButton onClick={handleEditAction}>
                                <EditOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    }
                    {
                        (roles.includes(Constants.OWNER_ROLE) === true || roles.includes(Constants.ADMIN_ROLE)) &&
                        <Tooltip title="Delete this property">
                            <IconButton onClick={handleDeleteAction} color="warning">
                                <DeleteOutlineRoundedIcon />
                            </IconButton>
                        </Tooltip>
                    }
                    
                    <ExpandMore expand={expanded} onClick={expandClicked}
                        aria-expanded={expanded} aria-label="Show More">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {property.overview}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <ConfirmDialog
                open={openConfirm}
                title='Confirmation'
                content='Do you really want to delete this property?'
                titleBtnAgree="Agree"
                titleBtnCancel="Cancel"
                cancelFunc={() => setOpenConfirm(false)}
                agreeFunc={agreeDialog}
            />
        </div>
    )
}