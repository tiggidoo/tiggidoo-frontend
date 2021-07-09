import { makeStyles, Typography } from '@material-ui/core'
import { Hidden } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React, { useEffect } from 'react'
import { getDateFormatDayMotnYear } from '../../../../../share/librery/librery'
import config from '../../../../../../config.json'

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
            color: '#000',
            '@media(max-width: 1200px)': {
                fontSize: '18px'
            }
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
        color: "#fff",
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
        padding: theme.spacing(1,0),
        '@media(max-width: 600px)':{
            width: '50%',
        }
    }
}))

const ReqHeader = ({ uuid, service, duration, statusId, housework }) => {
    const classes = useStyle()

    let d = duration.split(':')
    d = `${d[0]}H${d[1]}`
    //theHourOneIsChosen
    let theHourOneIsChosen = true
    if((statusId !== null && statusId !== '1')){
        d = housework.time[0].pro_duration
        if(housework.frequency.id !== 1){
            if(housework.time[1].pro_start_time !== null){
                d = housework.time[1].pro_duration.slice(0, -3).replace(':', 'H')
                theHourOneIsChosen = false
            }    
        }
    }

    const getDay = new Date(`${housework.time[0].week_date} 00:00:00`)
    let getOptionDay = null
    if((housework.time.length === 2)){
        getOptionDay = new Date(`${housework.time[1].week_date} 00:00:00`)
    }


    let color = '#2880fb'
    if(statusId === '2'){
        color = '#FF8925'
    }
    if(statusId === '4'){
        color = '#28CC8B'
    }

    return (
        <Box className={classes.tittles}>
            <Box className={classes.boxStyle}>
                <Box>
                    <Typography variant="h6">DATE</Typography>                
                </Box>
                <Box>
                    {(theHourOneIsChosen || statusId === null || statusId === '1') && (
                        <Typography variant="h5" style={{color: color}}>
                            {config.DAYS_EN[getDay.getDay()] + ' ' + getDateFormatDayMotnYear(`${housework.time[0].week_date} 00:00:00`)}
                        </Typography>
                    )}
                    
                    {((housework.time.length === 2 && (statusId === null || statusId === '1')) || !theHourOneIsChosen) && (
                        <Typography variant="h5" style={{color: color}}>
                            {config.DAYS_EN[getOptionDay.getDay()] + ' ' + getDateFormatDayMotnYear(`${housework.time[1].week_date} 00:00:00`)}
                        </Typography>
                    )}
                    
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
                    <Typography variant="h6">ESTIMATIN TIGGIDOO</Typography>                
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
                    <Typography variant="h5">{ housework.frequency.fr }</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ReqHeader
