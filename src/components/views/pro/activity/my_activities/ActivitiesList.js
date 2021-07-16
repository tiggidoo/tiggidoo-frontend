import React from 'react'
import { Grid, Typography, Box, makeStyles, Fab } from '@material-ui/core'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded'
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    activityStyle: {
        display:'flex', 
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: theme.spacing(0, 2, 2, 0),
        paddingRight: '15px !important',
        borderRadius: '21px',
        boxShadow: '0px 10px 10px #00000055',
        '& h5':{
            fontSize: '9px',
            '@media(max-width: 375px)':{
                fontSize: '8px'
            }
        },
        '& h6':{
            color: '#000',
            fontWeight: 'bold',
            '@media(max-width: 1366px)':{
                fontSize: '1.4rem'
            },
            '@media(max-width: 600px)':{
                fontSize: '1.1rem'
            }
        },
        '@media(max-width: 600px)':{
            //margin: theme.spacing(0, 0, 2, 0)
        }
    },
    boxStyle:{
        padding: '12px 0px !important',
        borderRadius: '21px 0px 0px 21px'
    },
    arrow:{
        fontSize:'2.3rem',
        color: '#fff'
    },
    circle: {
        marginTop: '3px',
        width: '30px', 
        height: '30px',
        minHeight: '30px',
        backgroundColor: theme.palette.secondary.main 
    }
}))

const ActivitiesList = ({ activitiesPro }) => {
    const classes = useStyle()

    console.log(activitiesPro)
    return (
        <Box style={{marginLeft: '8px'}}>

            <Box mb={4}>
                <Box >                    
                    <Typography component="h5" variant="subtitle1" >
                        Le 12 mars 2020
                    </Typography>
                    <Typography component="h5" variant="h6" >
                        
                    </Typography>
                </Box>
            </Box>
            {(activitiesPro) && (
                <Box>
                    {
                        activitiesPro.map(row => {
                            console.log(row)
                            {
                                return(
                                    <Box>
                                        <Box className={classes.activityStyle}>
                                            
                                            <Box className={classes.boxStyle} style={{backgroundColor: '#28CC8B', width: '45px', fontSize: '10px'}}>     
                                                
                                            </Box>
                                            
                                            <Box className={classes.boxStyle}>                                          
                                                <Typography component="h5" variant="subtitle2">HEURE</Typography>
                                                <Typography component="h6" variant="h6">{row.pro_start_time.slice(0, -3).replace(':', 'H')}</Typography>
                                            </Box>
                                            <Box className={classes.boxStyle}>
                                                <Typography component="h5" variant="subtitle2">TEMPS ESTIMÉ</Typography>
                                                <Typography component="h6" variant="h6">{row.pro_duration.slice(0, -3).replace(':', 'H')}</Typography>
                                            </Box>
                                            <Box className={classes.boxStyle}>
                                                <Typography component="h5" variant="subtitle2">FORMULE</Typography>
                                                <Typography component="h6" variant="h6">{row.en}</Typography>
                                            </Box>
                                            <Box className={classes.boxStyle}>
                                                <Typography component="h5" variant="subtitle2">REVENUS</Typography>
                                                <Typography component="h6" variant="h6">{row.total_price}</Typography>
                                            </Box>
                                            <Box className={classes.boxStyle}>
                                                <Link to={`/show-reservation/${row.id}/4`} >
                                                    <Fab className={classes.circle} aria-label="add">
                                                        <ArrowForwardRoundedIcon className={classes.arrow} />
                                                    </Fab>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            }
                        })
                    }
                </Box>
            )}


        </Box>
    )
}

export default ActivitiesList
