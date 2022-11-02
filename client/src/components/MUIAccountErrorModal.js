import { useContext } from 'react'
import AuthContext from '../auth';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';

export default function MUIDeleteModal() {
    const { auth } = useContext(AuthContext);

    let error = auth.errorMsg ? true : false;

    const handleConfirm = (event) => {
        event.preventDefault();
        auth.confirmUserWarning();
    }

    return (
        <Modal open={error}>
            <Fade in={error}>
                <Alert
                    severity="warning"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="large"
                            onClick={handleConfirm}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    <AlertTitle>Warning</AlertTitle>
                    {auth.errorMsg}
                </Alert>
            </Fade>
        </Modal>
    );
}