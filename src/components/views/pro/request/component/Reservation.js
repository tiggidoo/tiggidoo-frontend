import { Box, makeStyles, Typography, Hidden, Fab } from '@material-ui/core'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { formateDateSlashes } from '../../../../share/librery/librery'
import React from 'react'
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    resArea: {
        display:'flex',
        flexDirection:'row', 
        justifyContent:'space-between',
        alignContent: 'center',        
        marginBottom:theme.spacing(4),     
        borderRadius:'21px',   
        boxShadow: '0px 10px 10px #00000055',
        '& h6':{
            color: '#fff',
            fontWeight: 'bold'
        }
    },
    dateArea:{
        display: 'flex',
        flexDirection: 'column',        
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        padding:theme.spacing(3, 2),
        borderRadius:'21px 0 0 21px',
        '@media(max-width: 600px)':{
            padding:theme.spacing(3, 0)
        }
    },
    contArea:{
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        '& h6':{
            fontSize: '10px',
            color: '#737379'
        },
        '& h5':{
            fontSize: '15px',
            color: '#060609',
            '@media(max-width: 600px)':{
                // flexWrap: 'wrap',
                fontSize: '13px'
            },
            '@media(max-width: 350px)':{
                // flexWrap: 'wrap',
                fontSize: '11px'
            }
        },
        '@media(max-width: 600px)':{
            // flexWrap: 'wrap',
            width: '50%',
        }
    },
    contAreaMovil:{
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        alignItems: 'center',
        '& h6':{
            fontSize: '9px',
            color: '#ff'
        },
        '& h5':{
            fontSize: '11px',
            color: '#fff'
        }
    },
    infoRes:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: theme.spacing(2,1),
        width: '100%',
        '@media(max-width: 600px)':{
            display:' flex',
            flexWrap: 'wrap',
            padding: '5px'
        }
    },
    arrow:{
        fontSize:'2.8rem', 
        color: '#fff'
    },
    dollarS: {
        '& h5':{
            color: theme.palette.primary.main
        }
    }
}))

const Reservation = ({res}) =>{
    const classes = useStyle()

    let duration = res.total_duration.split(':')
    duration = `${parseInt(duration[0])}H${parseInt(duration[1])}`

    return (
        <Box className={classes.resArea}>
            <Box className={classes.dateArea}>
                <Box mx={1}>
                    <Hidden smUp>
                        <Box className={classes.contAreaMovil} only="sm">
                            <Typography variant="h6">SERVICE</Typography>
                            <Box>
                                <Typography variant="h5">{res.service}</Typography>
                            </Box>
                        </Box>
                    </Hidden>
                    <Typography variant="h6">
                        {formateDateSlashes(res.start_date)}
                    </Typography>
                </Box>
            </Box>

            <Box className={classes.infoRes}>
                <Hidden smDown>
                    <Box className={classes.contArea} only="sm">
                        <Typography variant="h6">ID REQUÊTE</Typography>
                        <Box>
                            <Typography variant="h5">{res.uuid}</Typography>
                        </Box>
                    </Box>
                </Hidden>
                <Hidden smDown>
                    <Box className={classes.contArea}>
                        <Typography variant="h6">SERVICE</Typography>
                        <Box>
                            <Typography variant="h5">{res.service}</Typography>
                        </Box>
                    </Box>
                </Hidden>
                <Box className={classes.contArea}>
                    <Typography variant="h6">FORMULE</Typography>
                    <Box>
                        <Typography variant="h5">{res.en}</Typography>
                    </Box>
                </Box>
                <Box className={classes.contArea}>
                    <Typography variant="h6">HEURE</Typography>
                    <Box>
                        <Typography variant="h5">MATIN</Typography>
                    </Box>
                </Box>
                <Box className={classes.contArea}>
                    <Typography variant="h6">TEMPS ESTIMÉ</Typography>
                    <Box>
                        <Typography variant="h5">{duration}</Typography>
                    </Box>
                </Box>
                <Box className={classes.contArea}>
                    <Typography variant="h6">TARIF DE BASE</Typography>
                    <Box display="flex" flexDirection="row" alignContent="center" alignItems="center">
                        <Box mr={1}>
                            <Typography variant="h5">{`${res.total_price}`}</Typography>
                        </Box>
                        <Box className={classes.dollarS}>
                            <Typography variant="h5">$</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>            

            <Box display="flex" flexDirection="column" justifyContent="center">
                <Box style={{marginRight: '12px'}}>
                    <Link to={`/show-reservation/${res.id}`} >
                        <Fab size="small" color="primary" aria-label="add">
                            <ArrowForwardRoundedIcon className={classes.arrow} />
                        </Fab>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Reservation
