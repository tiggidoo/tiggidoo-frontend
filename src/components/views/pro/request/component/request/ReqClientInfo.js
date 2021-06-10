import { Typography } from '@material-ui/core'
import { Box, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import MapPro from './MapPro'

const useStyle = makeStyles((theme) => ({
    clientArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        //padding: theme.spacing(4, 0)
    },
    boxClient: {
        margin: theme.spacing(2) ,
        '& h4':{
            fontWeight: 'bold'
        },
        '@media(max-width: 600px)':{
            margin: theme.spacing(1)
        }
    },
    areaClientMap:{
        '& .leaflet-container':{
            height: '25vh',
            zIndex: '1',
            '@media(max-width: 600px)':{
                height: '30vh',
            }
        }
    },
    address: {
        paddingBottom: theme.spacing(1),
        '& h6':{
            color: theme.palette.primary.main,
            lineHeight: 1.3
        }
    }
}))

const ReqClientInfo = ({housing, client, totalPrice, personalization}) => {
    const classes = useStyle()
    return (
        <Box className={classes.clientArea}>

            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Box className={classes.boxClient}>
                        <Box mb={1}>
                            <Typography variant="h4">DESCRIPTION DU LOGEMENT</Typography>
                        </Box>
                        <Box display="flex">                
                            <Box mr={3}>
                                <Box mb={2}>
                                    <Typography variant="h6">{housing.category.fr}</Typography>                        
                                </Box>
                                <Box>
                                    <Typography variant="h6">{`${housing.specificity.floor} etage(s)`}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{`${housing.specificity.kitchen} cuisine(s)`}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{`${housing.specificity.salon} salon(s)`}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{`${housing.specificity.dining_room} salle(s) a manger`}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{`${housing.specificity.bedroom} chambre(s)`}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{`${housing.specificity.bathroom} salle(s) de bain`}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{`${housing.specificity.shower} douche(s)`}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{`${housing.specificity.bathtub} baignoire(s)`}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">{`${housing.specificity.washbasin} salle(s) d'eau`}</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box>
                                    <Box mb={2}>
                                        <Typography variant="h6">PERSONALISSATION</Typography>
                                    </Box>
                                    <Typography variant="h6">{`Aspirateur - ${personalization.vacuum !== 0 ? 'Oui': 'None'}`}</Typography>
                                    <Typography variant="h6">{`Fridge - ${personalization.fridge > 0 ? 'Oui': 'None'}`}</Typography>
                                    <Typography variant="h6">{`Four - ${personalization.oven !== 0 ? 'Oui': 'None'}`}</Typography>
                                    <Typography variant="h6">{`Product standard - ${personalization.product_standard !== 0 ? 'Oui': 'None'}`}</Typography>
                                    <Typography variant="h6">{`Product ecological - ${personalization.product_ecological !== 0 ? 'Oui': 'None'}`}</Typography>
                                    <Typography variant="h6">{`Lits - ${personalization.bed > 0 ? 'Oui': 'None'}`}</Typography>
                                    <Typography variant="h6">{`Chats - ${personalization.cat !== 0 ? 'Oui': 'None'}`}</Typography>
                                    <Typography variant="h6">{`Chiens - ${personalization.dog !== 0 ? 'Oui': 'None'}`}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box className={classes.boxClient}>
                        <Box mb={1}>
                            <Typography variant="h4">LOCALISATION</Typography>
                        </Box>
                        <Box className={classes.address}>
                            <Typography variant="h6">2365, Place Neptune</Typography>
                            <Typography variant="h6">{`${client.address.postcode}, ${client.address.province}, ${client.address.city}`}</Typography>
                        </Box>
                        {/* `${client.address.postcode}, ${client.address.province}, ${client.address.city}` */}
                        <Box>
                            <MapPro profs={[]} client={client}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>



        </Box>
    )
}

export default ReqClientInfo