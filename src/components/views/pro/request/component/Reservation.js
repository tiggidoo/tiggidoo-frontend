import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { formateDateSlashes } from '../../../../share/librery/librery'
import React from 'react'
import { Columns } from 'react-bootstrap-icons';

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
        borderRadius:'21px 0 0 21px'
    },
    contArea:{
        // display: 'flex',
        // flexDirection: 'column',
        padding: '15px 0 0 10px',
        '& h6':{
            fontSize: '9px',
            color: '#000'
        },
        '& h5':{
            fontSize: '13px',
            color: '#000'
        }
    }
}))

const Reservation = ({res}) =>{
    const classes = useStyle()

    console.log(res)

    return (
        <Box className={classes.resArea}>
            <Box className={classes.dateArea}>
                <Typography variant="h6">
                    {formateDateSlashes(res.start_date)}
                </Typography>
            </Box>
            
            <Grid container >
                <Grid item md={2}>
                    <Box className={classes.contArea}>
                        <Typography variant="h6">ID REQUETE</Typography>
                        <Box>
                            <Typography variant="h5">{res.uuid}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box className={classes.contArea}>
                        <Typography variant="h6">ID REQUETE</Typography>
                        <Box>
                            <Typography variant="h5">{res.service}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box className={classes.contArea}>
                        <Typography variant="h6">ID REQUETE</Typography>
                        <Box>
                            <Typography variant="h5">MATIN</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box className={classes.contArea}>
                        <Typography variant="h6">ID REQUETE</Typography>
                        <Box>
                            <Typography variant="h5">{res.total_duration}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box className={classes.contArea}>
                        <Typography variant="h6">ID REQUETE</Typography>
                        <Box>
                            <Typography variant="h5">{res.en}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box className={classes.contArea}>
                        <Typography variant="h6">ID REQUETE</Typography>
                        <Box>
                            <Typography variant="h5">{res.total_price}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box display="flex" flexDirection="column" justifyContent="center">
                <ArrowForwardRoundedIcon color="#fff" />
            </Box>
        </Box>
    )
}

export default Reservation
