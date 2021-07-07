import { Box, makeStyles, Typography, Hidden, Fab } from '@material-ui/core'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { formateDateSlashes } from '../../../../share/librery/librery'
import React from 'react'
import { Link } from 'react-router-dom';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const useStyle = makeStyles((theme) => ({
    resArea: {
        display:'flex',
        flexDirection:'row', 
        justifyContent:'space-between',
        alignContent: 'center',        
        //marginBottom:theme.spacing(4),     
        borderRadius:'21px',   
        boxShadow: '0px 10px 10px #00000055',
        width: '100%',
        '& h6':{
            color: '#fff',
            fontWeight: 'bold'
        }
    },
    dateArea:{
        display: 'flex',
        flexDirection: 'column',        
        justifyContent: 'center',
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
        fontSize:'1.8rem',
        color: '#fff'
    },
    dollarS: {
        '& h5':{
            color: theme.palette.primary.main
        }
    },
    checkArea: {
        width: '35px', 
        textAlign: 'center', 
        background: '#FFFFFF 0% 0% no-repeat padding-box', 
        borderRadius: '16px', 
        marginBottom: '5px',
        boxShadow: '0px 3px 6px #00000029'
    },
    circle: {
        width: '35px', 
        height: '35px',
        //backgroundColor: theme.palette.primary.main 
    },
    check:{
        fontSize: '2.6rem',
    },
    title: {
        fontSize: '10px',
        fontWeight: 'bold'
    },
    colorBlue: {
        color: theme.palette.primary.main        
    },
    colorGray: {
        color: '#929292'
    },
    colorBackgroundBlue:{
        backgroundColor: theme.palette.primary.main,
    },
    colorBackgroundGray:{
        backgroundColor: '#929292',
    }

}))

const Reservation = ({res, statusId}) =>{
    const classes = useStyle()

    let duration = res.total_duration.split(':')
    duration = `${parseInt(duration[0], 10)}H${parseInt(duration[1], 10)}`

    let color = '#2880fb'
    if(statusId === '1'){        
        if(res.has_consulted !== 1){
            color= '#929292'
        }
    }
    if(statusId === '2'){
        color = '#FF8925'
    }
    if(statusId === '4'){
        color = '#28CC8B'
    }

    return (
        <Box my={2}>
            <Box display="flex" flexDirection="row" >
                {(statusId === '1') && (
                    <Hidden smDown>
                        <Box  display="flex" flexDirection="column" alignItems="center" justifyContent="center" mr={2}>
                            <Box>
                                <Box className={classes.checkArea}>
                                    <DoneAllIcon className={ classes.check } style={{color: color}}/>
                                </Box>
                            </Box>
                            <Box className={ classes.title }  style={{color: color}}>NOUVELLE</Box>
                        </Box>
                    </Hidden>
                )}
                <Box className={classes.resArea}>
                    <Box className={classes.dateArea} style={{backgroundColor: color}}>
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
                                {formateDateSlashes(`${res.start_date} 00:00:00`)}
                            </Typography>
                        </Box>
                    </Box>

                    <Box className={classes.infoRes}>
                        <Hidden smDown>
                            <Box className={classes.contArea}>
                                <Typography variant="h6">ID RESERVATION</Typography>
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
                            <Link to={`/show-reservation/${res.id}/${statusId}`} >
                                <Fab className={classes.circle} aria-label="add" style={{backgroundColor: color}}>
                                    <ArrowForwardRoundedIcon className={classes.arrow} />
                                </Fab>
                            </Link>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Reservation
