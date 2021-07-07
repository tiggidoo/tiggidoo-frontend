import { Box, makeStyles, Modal, Button } from '@material-ui/core'
import React, { useState } from 'react'

const useStyle = makeStyles((theme) => ({
  modalPaper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btnGroup:{
    display: 'flex', 
    justifyContent: 'space-around',
    marginTop: theme.spacing(2)
  }
}))

const Popup = ({openPopup, handleClosePopup, runFunction, message}) => {
    
    const classes = useStyle()

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();
    
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const [modalStyle] = useState(getModalStyle);

    const apiRun = (e) =>{
        e.preventDefault()
        runFunction()
    }

    const body = (
        <div style={modalStyle} className={classes.modalPaper}>
            <h2 style={{ fontSize: "22px", margin: '20px 20px 40px 20px' }} >{message}</h2>
            <Box className={classes.btnGroup}>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={e => apiRun(e)}
                >
                    Oui
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={e => handleClosePopup(e) }
                >
                    Non
                </Button>
            </Box>
        </div>
    );


    return (
        <Box>
            <Modal
                open={openPopup}
                onClose={e => handleClosePopup(e) }
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </Box>
    )
}

export default Popup
