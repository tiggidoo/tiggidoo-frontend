import { makeStyles, Typography } from '@material-ui/core'
import { Hidden } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React from 'react'
import { getDateFormatDayMotnYear } from '../../../../../share/librery/librery'

const useStyle = makeStyles((theme)=> ({
    tittles: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        //alignItems: 'center',
        padding: theme.spacing(4),
        '& h6':{
            color: '#737379',
            fontSize: '15px',
            fontWeight: 'bold'
        },
        '& h5':{
            fontWeight: 'bold',
            color: '#000'
        },
        '@media(max-width: 600px)':{
            display:'flex',
            flexWrap: 'wrap',
            padding: theme.spacing(2, 0),
        }
    }
    ,
    statusStyle: {
        fontSize: "1.4rem",
        color: "white",
        width: '10.4rem',
        height: '3.6rem',
        fontWeight: 'bold',
        boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        borderRadius: "4px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        //backgroundColor: '#5087f5'
    },
    btnNew:{
      backgroundColor: theme.palette.primary.main
    },
    btnWaitting:{
      backgroundColor: '#f49e3b'
    },
    nonAffected:{
      backgroundColor: '#983ef2'
    },
    boxStyle:{
        width: '50%',
        padding: theme.spacing(1,0)
    }
}))

const ReqHeader = ({ uuid, service, date, optionDate, duration }) => {
    const classes = useStyle()
    let d = duration.split(':')
    d = `${d[0]}H${d[1]}`
    
    // let messageBtn = 'NOUVELLE'
    // let btnStyle = classes.statusStyle + ' ' + classes.btnNew
    
    // if(reservationStatusId === '1'){
    //     btnStyle = btnStyle + ' ' + classes.btnWaitting
    //     messageBtn = 'EN ATTENTE'
    // }

    return (
        <Box className={classes.tittles}>
            <Box className={classes.boxStyle}>
                <Box>
                    <Typography variant="h6">DATE</Typography>                
                </Box>
                <Box>
                    <Typography variant="h5">{getDateFormatDayMotnYear(`${date} 00:00:00`)}</Typography>
                    <Typography variant="h5">{getDateFormatDayMotnYear(`${optionDate} 00:00:00`)}</Typography>
                </Box>
            </Box>
            <Hidden smDown>
                <Box className={classes.boxStyle}>
                    <Box>
                        <Typography variant="h6">ID REQUÊTE</Typography>                
                    </Box>
                    <Box>
                        <Typography variant="h5">{uuid}</Typography>
                    </Box>
                </Box>
            </Hidden>
            <Box className={classes.boxStyle}>
                <Box>
                    <Typography variant="h6">SERVICE</Typography>                
                </Box>
                <Box>
                    <Typography variant="h5">{service.toUpperCase()}</Typography>
                </Box>
            </Box>
            
            <Box className={classes.boxStyle}>
                <Box>
                    <Typography variant="h6">TEMPS ESTIMÉ</Typography>                
                </Box>
                <Box>
                    <Typography variant="h5">{d}</Typography>
                </Box>
            </Box>

            <Box className={classes.boxStyle}>
                <Box>
                    <Typography variant="h6">FORMULE</Typography>                
                </Box>
                <Box>
                    <Typography variant="h5">Hebdo</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ReqHeader
