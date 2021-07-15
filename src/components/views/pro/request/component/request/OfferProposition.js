import { Box, Grid, makeStyles, Typography, Fab, TextareaAutosize, Button, IconButton } from '@material-ui/core'
import SelectInput from '../../../../../share/inputs/SelectInput'
import Input from '../../../../../share/inputs/Input'
import { calculateTpsTvqAndTotal, getDateFormatDayMotnYear, functionHour } from '../../../../../share/librery/librery'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Popup from '../../../../../share/popup/Popup'
import config from '../../../../../../config.json'
import React, { useState, useEffect } from 'react'

const useStyle = makeStyles((theme) => ({
    offre:{
        margin: theme.spacing(0, 2),
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '11px',
        '@media(max-width: 600px)':{
            margin: theme.spacing(0)
        },
        '& h4':{
            color: theme.palette.primary.main,
            fontWeight: 'bold'
        }
    },
    propo: {
        margin: theme.spacing(3, 4),
        '@media(max-width: 992px)':{
            margin: theme.spacing(3, 2)
        },
        '& .MuiFab-sizeSmall':{
            //'@media(max-width: 600px)':{
                width: '33px',
                height: '33px',
                minHeight: '33px'
            //}
        },
        '& textarea':{
            padding: '10px'
        }
    },
    propositionOffre:{
        display:'flex',
        flexDirection:'column',
        marginLeft: '10px',
        width: '100%',
        '& h5':{
            fontSize: '1.7rem',
            fontWeight: 'normal',
            color: '#000',
            '@media(max-width: 1366px)':{
                fontSize: '15px'
            },
            // '@media(max-width: 1200px)':{
            //     fontSize: '14px'
            // }
        },
        '& h6':{
            color: '#737379', 
            fontWeight: 'bold',
            fontSize: '1.4rem'
        },
        '& h4':{
            color: '#000',
            fontSize: '1.7rem',
            '@media(max-width: 1366px)':{
                fontSize: '15px'
            }
        }
    },
    btnArea: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        margin: theme.spacing(3, 2),
        '@media(max-width: 768px)':{
            flexDirection:'column',
            alignItems: 'center'
        }
    },
    tariff: {
        display:'flex',
        justifyContent: 'flex-end',
        '& .MuiOutlinedInput-inputMarginDense':{
            paddingRight: '35px'
        },
        '& .MuiOutlinedInput-input':{
            textAlign: 'right'
        },
        '& input[type=number]::-webkit-inner-spin-button':{
            display: 'none',
            webkitAppearance: 'none',
        },
        '& input[type=number]::-webkit-outer-spin-button':{
            display: 'none',
            webkitAppearance: 'none'
        },
        '& [type=number]': {
            '-moz-appearance': 'textfield'
        },
        '&::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
            margin: 0,
        },
        '&::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
            margin: 0,
        },
        '& button:focus':{
            outline: 'none'
        }   
    },
    selectInput: {
        '& select.MuiNativeSelect-root': {
            width: '100px !important',
            '@media(max-width: 600px)':{
                width: '85px !important',
            }
        }
    },
    btnRefuse: {
        backgroundColor:'#D94D5D', 
        color: '#fff'
    },
    btnValidate: {
        color: '#fff',
        backgroundColor: theme.palette.secondary.main
    },
    btnCanceled:{
        border: '2px solid #DA5564',
        backgroundColor: 'transparent',
        color: '#DA5564',
        marginBottom: theme.spacing(2)
    },
    iconStyle: {
        color: '#fff', 
        width: '19px', 
        height: '19px', 
        marginTop: '-25px'
    },
    circle:{
        minHeight: '25px', 
        width: '25px', 
        height: '25px', 
        borderRadius: '50%', 
        backgroundColor: theme.palette.primary.main
    },
    btnRetired:{
        display: 'flex', 
        justifyContent:'flex-end',
        margin: theme.spacing(3, 2),
        '@media(max-width: 600px)':{
            justifyContent:'center'
        }
    },
    btnOffreRetired:{
        color: '#fff',
        background: '#D94D5D 0% 0% no-repeat padding-box'
    }
}))

const OfferProposition = ({ 
    tiggidooPrice, 
    proWorkPrice, 
    isCalculateTax, 
    sendReservation, 
    sendReservationCanceled,
    statusId, 
    reservationId, 
    reservationType,
    activityVacuumPrice,
    housework,
    getHourProToBlockFunction,
    tymeScheduleActivities,
    dispatchGetHourProToBlockFunction,
    proSelectTime
}) => {
    const classes = useStyle()

    const [serviceHour, setServiceHour] = useState()

    const duration = [
        { id: '01:00:00', name: '1H00' },
        { id: '01:30:00', name: '1H30' },
        { id: '02:00:00', name: '2H00' },
        { id: '02:30:00', name: '2H30' },
        { id: '03:00:00', name: '3H00' },
        { id: '03:30:00', name: '3H30' },
        { id: '04:00:00', name: '4H00' },
    ];

    const additionals = [
        { id: '0', name: '0 $' },
        { id: '5', name: '5 $' },
        { id: '10', name: '10 $' },
        { id: '15', name: '15 $' },
        { id: '20', name: '20 $' },
        { id: '25', name: '25 $' },
        { id: '30', name: '30 $' },
        { id: '35', name: '35 $' },
        { id: '40', name: '40 $' },
        { id: '45', name: '45 $' },
        { id: '50', name: '50 $' },
        { id: '55', name: '55 $' },
        { id: '60', name: '60 $' },
        { id: '65', name: '65 $' },
        { id: '70', name: '70 $' },
        { id: '75', name: '75 $' },
        { id: '80', name: '80 $' },
        { id: '85', name: '85 $' },
        { id: '90', name: '90 $' },
        { id: '95', name: '95 $' },
        { id: '100', name: '100 $' },
    ];

    const getDay = new Date(`${housework.time[0].week_date} 00:00:00`)
    let disDay = config.DAYS_EN[getDay.getDay()] + ' ' + getDateFormatDayMotnYear(`${housework.time[0].week_date} 00:00:00`)
    disDay = disDay.substring(0, disDay.length - 4)

    const chooseDate = [
        {id: housework.time[0].week_date, name: disDay },
    ];

    let getOptionDay = null
    let disOptionDay = null
    if((housework.time.length === 2)){
        getOptionDay = new Date(`${housework.time[1].week_date} 00:00:00`)
        disOptionDay = config.DAYS_EN[getOptionDay.getDay()] + ' ' + getDateFormatDayMotnYear(`${housework.time[1].week_date} 00:00:00`)
        disOptionDay = disOptionDay.substring(0, disOptionDay.length - 4)
        chooseDate.push({id: housework.time[1].week_date, name: disOptionDay })
    }

    let res = {
        tps: 0, 
        tvq:0,
        total: parseFloat(proWorkPrice,10) + 5
    }

    res = calculateTpsTvqAndTotal(parseFloat(proWorkPrice,10), (activityVacuumPrice === null || activityVacuumPrice === undefined) ? 0 : parseInt(activityVacuumPrice,10), isCalculateTax)

    const [openPopup, setOpenPopup] = useState(false)
    const [formData, setFormData] = useState({
        id: reservationId,
        proStartTime: proSelectTime.length === 1 ? proSelectTime[0].pro_start_time : '08:00:00',
        proDuration: proSelectTime.length === 1 ? proSelectTime[0].pro_duration : '01:00:00',
        proStartDate: proSelectTime.length === 1 ? proSelectTime[0].week_date : housework.start_date,
        proVacuumPrice: (activityVacuumPrice === null || activityVacuumPrice === undefined) ? '0' : activityVacuumPrice,
        proProductEcologicalPrice: 0,
        proProductStandardPrice: 0,
        proWorkPrice: proWorkPrice,
        proPriceMoreTaxes: res.total,
        proComment: "",
        tps: res.tps,
        tvq: res.tvq
    })

    useEffect(() => {
        if(serviceHour && proSelectTime.length === 0){
            setFormData({
                ...formData,
                proStartTime: serviceHour[0].id
            })
        }
    },[serviceHour, proSelectTime])

    useEffect(() => {
        if(statusId === '1'){

            if(tymeScheduleActivities === null && formData.proStartDate){
                dispatchGetHourProToBlockFunction(formData.proStartDate)
            }
        }
    }, [statusId, formData.proStartDate, tymeScheduleActivities, dispatchGetHourProToBlockFunction])

    useEffect(() =>{
        setServiceHour(functionHour(tymeScheduleActivities, formData.proStartDate))
    },[tymeScheduleActivities, formData.proStartDate])

    const handleChange = (e) => {
        e.preventDefault()

        const { proWorkPrice, proVacuumPrice }= formData

        if(e.target.name === 'proVacuumPrice'){
            res = calculateTpsTvqAndTotal(parseFloat(proWorkPrice,10), parseFloat(e.target.value,10) , isCalculateTax)
        }

        if(e.target.name === 'proWorkPrice'){
            res = calculateTpsTvqAndTotal(parseFloat(e.target.value,10), parseFloat(proVacuumPrice,10), isCalculateTax)
        }

        setFormData({ ...formData, 
            [e.target.name]:e.target.value,
            'proPriceMoreTaxes': res.total,
            'tps': res.tps,
            'tvq': res.tvq
        })
    }

    const handleChangeAndApi = (e) => {
        e.preventDefault()

        getHourProToBlockFunction(e.target.value)

        setFormData({ ...formData, 
            [e.target.name]:e.target.value,
            'proPriceMoreTaxes': res.total,
            'tps': res.tps,
            'tvq': res.tvq
        })
    }

    let color = '#2880fb'
    if(statusId === '2'){
        color = '#FF8925'
    }
    if(statusId === '4'){
        color = '#28CC8B'
    }

    const sendValidateData = () => {
        sendReservation(formData)
        setOpenPopup(!openPopup)
    }

    const removeProWorkPrice = (e) => {
        e.preventDefault()
        const { proWorkPrice, proVacuumPrice }= formData

        res = calculateTpsTvqAndTotal((parseInt(proWorkPrice, 10) > 0) ? parseInt(proWorkPrice, 10) - 1 : 0, parseFloat(proVacuumPrice,10), isCalculateTax)

        setFormData({ ...formData, 
            'proWorkPrice':(parseInt(proWorkPrice, 10) > 0) ? parseInt(proWorkPrice, 10) - 1 : 0,
            'proPriceMoreTaxes': res.total,
            'tps': res.tps,
            'tvq': res.tvq
        })
    }

    const addProWorkPrice = (e) => {
        e.preventDefault()
        const { proWorkPrice, proVacuumPrice }= formData

        res = calculateTpsTvqAndTotal(parseInt(proWorkPrice, 10) + 1, parseFloat(proVacuumPrice,10), isCalculateTax)

        setFormData({ ...formData, 
            'proWorkPrice':parseInt(proWorkPrice, 10) + 1,
            'proPriceMoreTaxes': res.total,
            'tps': res.tps,
            'tvq': res.tvq
        })
    }

    const reservationCanceled = (e) => {
        e.preventDefault()
        sendReservationCanceled()
    }

    const handleOpenPopup = (e) => {
        e.preventDefault()
        setOpenPopup(!openPopup)
    }

    const handleClosePopup = (e) => {
        e.preventDefault()
        setOpenPopup(!openPopup)
    };

    return (
        <Box>

            <Popup 
                openPopup={openPopup} 
                handleClosePopup={handleClosePopup} 
                runFunction={sendValidateData} 
                message="Voulez-vous envoyer la proposition?"
            />

            <Box mt={2}>
                <Box className={classes.offre} style={{borderColor: color}}>
                    <Box className={classes.propo}>
                        <Typography variant="h4" style={{color: color}}>PROPOSITION D'OFFRE</Typography>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6}>
                                <Box>
                                    <Box display="flex" flexDirection="row" mt={2}>
                                        <Box>
                                            <Fab size="small" color="primary" aria-label="add" style={{backgroundColor: color}}>1</Fab>
                                        </Box>
                                        <Box className={classes.propositionOffre}>
                                            <Typography variant="h5">J’estime le temps de la prestation</Typography>
                                            <Box mr={2} mt={1}>
                                                <Typography variant="h6">MON ESTIMATION</Typography>
                                            </Box>
                                            <Box display="flex" flexDirection="row" justifyContent="space-between">
                                                <Box mr={2}>
                                                    <Typography variant="h5">Durée</Typography>
                                                </Box>
                                                <Box>
                                                    <Box className={classes.selectInput} >
                                                        <SelectInput
                                                            id="proDuration"
                                                            name="proDuration"
                                                            data={duration}
                                                            onChange={(e) => handleChange(e)}
                                                            defaultValue={formData.proDuration}
                                                            disabled={(statusId === null || statusId === '1') ? false : true}
                                                            color={color}
                                                        />                 
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>

                                <Box>
                                    <Box display="flex" flexDirection="row" mt={2}>
                                        <Box>
                                            <Fab size="small" color="primary" aria-label="add" style={{backgroundColor: color}}>2</Fab>
                                        </Box>
                                        <Box className={classes.propositionOffre}>
                                            <Typography variant="h5">J’indique ma disponibilité</Typography>
                                            <Box display="flex" flexDirection="column" mt={1} justifyContent="space-between">
                                                <Typography variant="h6">CRÉNAU DEMANDÉ</Typography>
                                                <Box>
                                                    <Box 
                                                        display="flex" 
                                                        flexDirection="row" 
                                                        justifyContent="space-between" 
                                                        mb={1}
                                                    >
                                                        <Typography variant="h5">Jour de disponibilité</Typography>
                                                        <Box className={classes.selectInput} >
                                                            <SelectInput
                                                                id="proStartDate"
                                                                name="proStartDate"
                                                                data={chooseDate}
                                                                onChange={(e) => handleChangeAndApi(e)}
                                                                defaultValue={formData.proStartDate}
                                                                disabled={(statusId === null || statusId === '1') ? false : true}
                                                                color={color}
                                                            />                
                                                        </Box>
                                                    </Box>

                                                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                                                        <Typography variant="h5">Matin</Typography>
                                                        <Box className={classes.selectInput} >
                                                            <SelectInput
                                                                id="proStartTime"
                                                                name="proStartTime"
                                                                data={serviceHour}
                                                                onChange={(e) => handleChange(e)}
                                                                defaultValue={formData.proStartTime}
                                                                disabled={(statusId === null || statusId === '1') ? false : true}
                                                                color={color}
                                                            />                
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <Box>
                                    <Box display="flex" flexDirection="row" mt={4}>
                                        <Box>
                                            <Fab size="small" color="primary" aria-label="add" style={{backgroundColor: color}}>3</Fab>
                                        </Box>
                                        <Box className={classes.propositionOffre}>
                                            <Typography variant="h5">Je renseigne le tarif des options</Typography>
                                            <Box display="flex" flexDirection="column">
                                                <Box display="flex" flexDirection="row">
                                                    <Typography variant="h6">EXTRA(S) DEMANDÉ(S)</Typography>
                                                </Box>
                                                <Box display="flex" flexDirection="row" justifyContent="space-between">
                                                    <Typography variant="h5"> Aspirateur et mope</Typography>
                                                    <Box className={classes.selectInput} >
                                                        <SelectInput
                                                            id="proVacuumPrice"
                                                            name="proVacuumPrice"
                                                            data={additionals}
                                                            onChange={(e) => handleChange(e)}
                                                            defaultValue={formData.proVacuumPrice}
                                                            disabled={(statusId === null || statusId === '1') ? false : true}
                                                            color={color}
                                                        />                
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Box>
                                    <Box display="flex" flexDirection="row" mt={4}>
                                        <Box>
                                            <Fab size="small" color="primary" aria-label="add" style={{backgroundColor: color}}>4</Fab>
                                        </Box>
                                        <Box className={classes.propositionOffre}>
                                            <Typography variant="h5">Je fixe le tarif de l’offre</Typography>
                                            
                                            <Box display="flex" flexDirection="row" justifyContent ="space-between" mt={1}>
                                                <Typography variant="h6">Estimation Tiggidoo</Typography>
                                                <Typography variant="h6">{ `${tiggidooPrice} $` }</Typography>
                                            </Box>
                                            <Box display="flex" flexDirection="row" justifyContent ="space-between" >
                                                <Box style={{width: '50%'}}>
                                                    <Typography variant="h6">Votre tarif</Typography>
                                                </Box>
                                                <Box className={classes.tariff}>
                                                    <Box display="flex" alignItems="center">
                                                    {(statusId === null || statusId === '1') && (
                                                        <Box>
                                                            <IconButton style={{marginRight: '-40px', zIndex: '99'}} onClick={ e=>removeProWorkPrice(e) }>
                                                                <Box className={classes.circle}>
                                                                    <RemoveIcon className={classes.iconStyle}/>
                                                                </Box>
                                                            </IconButton>
                                                        </Box>
                                                    )}
                                                        <Box>
                                                            <Input
                                                                id="proWorkPrice" 
                                                                label="" 
                                                                size="small" 
                                                                type='number'
                                                                width="135px"
                                                                onBlur={e=>handleChange(e)} 
                                                                defaultValue={formData.proWorkPrice} 
                                                                variant="outlined" 
                                                                readOnly={true}
                                                                color={color}
                                                                error=""
                                                            />
                                                        </Box>
                                                        {(statusId === null || statusId === '1') && (
                                                            <Box>
                                                                <IconButton style={{marginLeft: '-50px'}} onClick={ e=>addProWorkPrice(e) }>
                                                                    <Box className={classes.circle}>
                                                                        <AddIcon className={classes.iconStyle}/>
                                                                    </Box>

                                                                </IconButton>
                                                            </Box>
                                                        )}                                                        
                                                    </Box>
                                                </Box>

                                            </Box>
                                            <Box mt={1}>
                                                <Box display="flex" flexDirection="row" justifyContent ="space-between" >
                                                    <Typography variant="h6" style={{color: '#000', fontWeight: 'bold'}}>Extra(s) demandé(s)</Typography>
                                                </Box>
                                                <Box display="flex" flexDirection="row" justifyContent ="space-between" >
                                                    <Typography variant="h6">Aspirateur et mope</Typography>
                                                    <Typography variant="h5">{`+${formData.proVacuumPrice} $`}</Typography>
                                                </Box>
                                            </Box>
                                            <Box mt={1}>
                                                <Box display="flex" flexDirection="row" justifyContent ="space-between" >
                                                    <Typography variant="h4">Taxes</Typography>
                                                </Box>
                                                <Box display="flex" flexDirection="row" justifyContent ="space-between" >
                                                    <Typography variant="h6">Taxes TPS (5%)</Typography>
                                                    <Typography variant="h5">{`+${formData.tps} $`}</Typography>
                                                </Box>
                                                <Box display="flex" flexDirection="row" justifyContent ="space-between" >
                                                    <Typography variant="h6">Taxes TVQ (9,975%)</Typography>
                                                    <Typography variant="h5">{`+${formData.tvq} $`}</Typography>
                                                </Box>
                                            </Box>
                                            <Box mt={1}>
                                                <Box display="flex" flexDirection="row" justifyContent ="space-between" alignContent="center">
                                                    <Box style={{width: '60%'}}>
                                                        <Typography variant="h4">TARIF DE LA PRESTATTION</Typography>
                                                    </Box>
                                                    <Box style={{width: '40%', textAlign: 'right'}}>
                                                        <Typography variant="h3" style={{color: '#000', fontWeight: 'bold'}}>
                                                            {`${formData.proPriceMoreTaxes} $`}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
            {(statusId === '1') && (
                <Box>
                    <Box mt={2}>
                        <Box className={classes.offre}>
                            <Box className={classes.propo}>
                                <Box>
                                    <Box display="flex" flexDirection="row" mt={2} >
                                        <Box>
                                            <Fab size="small" color="primary" aria-label="add">5</Fab>
                                        </Box>
                                        <Box className={classes.propositionOffre} ml={1} >
                                            <Typography variant="h5">Je souhaite faire un commentaire</Typography>
                                            <TextareaAutosize 
                                                name="proComment" 
                                                aria-label="minimum height" 
                                                rowsMin={3} 
                                                placeholder="Enter a comment" 
                                                style={{width: '100%', marginTop: '16px'}} 
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className={classes.btnArea}>
                        <Box my={2}>
                            <Button variant="contained" className={classes.btnRefuse} >
                                REFUSER LA DEMANDE
                            </Button>
                        </Box>
                        <Box my={2}>
                            <Button variant="contained" className={classes.btnValidate} onClick={e => handleOpenPopup(e)}>
                                VALIDER MA DEMANDER
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )} 

            {(statusId === '2') && (
                <Box className={classes.btnRetired}>
                    <Button variant="contained" className={classes.btnOffreRetired} >
                        RETIRER MON OFFRE
                    </Button>
                </Box>
            )} 

            {(statusId === '4') && (
                <Box className={classes.btnArea}>
                    <Button variant="contained" className={classes.btnCanceled} onClick={e=>reservationCanceled(e)}>
                        ANNULER LA PRESTATION
                    </Button>
                    <Button variant="contained" color="primary">
                        CONTACTER LE SUPPORT
                    </Button>
                </Box>
            )} 
        </Box>
    )
}

export default OfferProposition
