import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Box, makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    messagePosition:{
        //display: 'flex',
        //justifyContent:'center',
        //marginBottom: '-75px',
        //marginTop: '27px',
        position: 'absolute',
        margin: theme.spacing(3),
        zIndex: '1',
        '@media(max-width: 992px)':{
            margin: '-6px 0 0 0',
        }
    },
    alertContentStyle: {
        width: 'fit-content',
    },
    alertSuccess: {
        backgroundColor: theme.palette.alert.success
    },
    alertError: {
        backgroundColor: theme.palette.alert.error
    },
    alertInfo: {
        backgroundColor: theme.palette.alert.info
    },
    alertWarning: {
        backgroundColor: theme.palette.alert.warning
    }
}));

const AlertMessage = ({ alerts }) => {
    const classes = useStyles();
    //const { alerts } = props;
    let styleContent = classes.alertContentStyle;

    if(alerts.length > 0){
        switch (alerts[0].alertType) {
            case 'success':
                styleContent += ' ' + classes.alertSuccess; 
                break;
            case 'error':
                styleContent += ' ' + classes.alertError; 
                break;
            case 'info':
                styleContent += ' ' + classes.alertInfo; 
                break;
            case 'warning':
                styleContent += ' ' + classes.alertWarning; 
                break;
            default:
                break;
        }
    }

    return (
        alerts !== null && 
        alerts.length > 0 && 
        alerts.map(alert => (
            <Box display="flex" justifyContent="center">    
                <Box key={alert.id} className={classes.messagePosition}>
                    <Alert  className={styleContent} variant="filled" severity={alert.alertType} >{ alert.message }</Alert>
                </Box>
            </Box>
        ))
    );    
}

AlertMessage.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(AlertMessage);
