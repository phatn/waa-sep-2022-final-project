import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { getPropertyById } from "../../services/PropertyService";
import {Box, Button, Modal, Typography} from "@mui/material";
import './PropertyDetail.scss';
import RequestTour from "./RequestTour";
import ContactAgent from "./ContactAgent";
import { useParams } from "react-router";


export default function PropertyDetail(props) {

    const propertyState = useSelector((state) => state.property);

    const dispatch = useDispatch();

    const params = useParams();

    useEffect(() => {
        dispatch(getPropertyById(params.id))

    },[])


    const [open, setOpen] = useState(props.open);


    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '100%',
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div>
            {console.log(JSON.stringify(propertyState))}
            { !propertyState.loadedProperty ?
                <div>Loading</div> :
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className='property-picture-box'>
                           <div className='property-detail-container'>
                                   <div className='property-picture'>
                                   {
                                       propertyState.property.pictures.map(p =>
                                        <img key={p} src={p} />
                                       )
                                   }
                               </div>
                               <div className='property-detail'>
                                   <div className='top-heading'>
                                       <div className='title'>WAA Property</div>
                                       <div className='actions'>
                                           <Button>Save</Button>
                                           <Button>Share</Button>
                                       </div>
                                   </div>
                                   <div className='heading'>
                                        <p>
                                            <span className='price'>${propertyState.property.price}</span>
                                            {propertyState.property.numOfRoom} bd
                                        </p>
                                       <p>{propertyState.property.location.street}, {propertyState.property.location.city}, {propertyState.property.location.zipCode}</p>
                                       <div className='btn-contacts'>
                                           <RequestTour property={propertyState.property} />
                                           <ContactAgent />
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </Box>
                    </Modal>

                </div>}
        </div>
    )
}