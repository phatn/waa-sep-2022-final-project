import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { style } from "./ModalStyle";

export default function ContactAgent() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (

        <>
            <Button size="medium" className='btn-contact-agent' variant="outlined" onClick={handleOpen}>Contact agent</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={style}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                        Contact Agent
                    </p>
                    <Button  onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
        </>
    )
}