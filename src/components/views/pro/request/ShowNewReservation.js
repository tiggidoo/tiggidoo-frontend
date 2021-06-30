import { Box, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getRequest, reservationRefuse, sendReservationPro } from '../../../../store/actions/reservationAction'
import Dashboard from '../../../layout/Dashboard'
import PaperLayout from '../../../layout/PaperLayout'
import OfferProposition from './component/request/OfferProposition'
import ReqClientInfo from './component/request/ReqClientInfo'
import ReqHeader from './component/request/ReqHeader'
import AccesAndAccommoInfo from './component/request/AccesAndAccommoInfo'
import AccommodationList from './component/request/AccommodationList'

const useStyle = makeStyles((theme) => ({
    workArea:{
        padding: theme.spacing(4,2),
        '& .MuiPaper-root':{
            padding: theme.spacing(4,0)
        },
        '@media(max-width: 600px)':{
            padding: theme.spacing(4,0)
        }
    },
    reqHeader:{
        borderBottom: '2px solid #aba7a8',
        //padding: theme.spacing(5, 4),
        '@media(max-width: 600px)':{
            //padding: theme.spacing(2, 0),
        }
    },
    reqClient:{
        padding: theme.spacing(2, 2),
        borderBottom: '2px solid #aba7a8',
        '@media(max-width: 600px)':{
            padding: theme.spacing(2, 0),
        },
        '& h4':{
            fontWeight: 'bold'
        },
        '& .MuiIconButton-label':{
            marginTop: '-19px'
        },
        '& .MuiFormControlLabel-label':{
            fontSize: '1.7rem'
        }
    },
    reqOffer:{
        padding: theme.spacing(2, 2),
        '@media(max-width: 600px)':{
            padding: theme.spacing(2, 0),
        }
    }
}))

const ShowNewReservation = () => {
    const classes = useStyle()

    const { auth:{pro, access_token, isLoggedIn}, reservationInfo } = useSelector(
        state => ({
            auth: state.auth,
            reservationInfo: state.reservation.reservation
        })
    )

    const dispatch = useDispatch()
    const { id, statusId } = useParams()


    console.log(statusId);

    useEffect(() => {
        dispatch(getRequest(access_token, id))
    }, [access_token, id, dispatch])

    const sendReservation = (dataForm) => {
        dispatch(sendReservationPro(access_token, dataForm))
    }

    const sendReservationCanceled = () => {
        dispatch(reservationRefuse(access_token, id))
    }

    //console.log('Un ano de gracia', reservationInfo.pro_work_price)

    return (
        <Dashboard
            user = { pro }
            token = { access_token }
            isLoggedIn = {isLoggedIn}
        >
            {(reservationInfo !== null) && (
                <Box className={classes.workArea}>
                    
                    <PaperLayout>

                        <Box className={classes.reqHeader}>
                            <ReqHeader 
                                uuid={reservationInfo.reservation.uuid} 
                                service={reservationInfo.reservation.service.fr} 
                                date={reservationInfo.reservation.housework.start_date} 
                                duration={reservationInfo.reservation.total_duration} 
                            />
                        </Box>

                        <Box className={classes.reqClient}>
                            <ReqClientInfo 
                                housing={reservationInfo.reservation.housing} 
                                client={reservationInfo.reservation.client} 
                                totalPrice={reservationInfo.reservation.total_price} 
                                personalization={reservationInfo.reservation.housework.personalization} 
                            />
                        </Box>
                        {(statusId === '4') && (
                            <Box className={classes.reqClient}>
                                <Box px={2} mb={1}>
                                    <Box mb={3}>
                                        <AccesAndAccommoInfo />    
                                    </Box>
                                    <Box>
                                        <AccommodationList />
                                    </Box>
                                </Box>
                            </Box>
                        )}
                        
                        <Box className={classes.reqOffer}>
                            <OfferProposition 
                                tiggidooPrice={reservationInfo.reservation.total_price} 
                                proWorkPrice={ (statusId === null || statusId === '1') ? reservationInfo.reservation.total_price :  reservationInfo.pro_work_price} 
                                isCalculateTax={pro.tax} 
                                sendReservation={sendReservation} 
                                sendReservationCanceled={sendReservationCanceled}
                                statusId={statusId}
                                reservationId={id}
                                activityDuration={reservationInfo.pro_duration}
                                activityVacuumPrice={reservationInfo.pro_vacuum_price}
                                activityStartTime={reservationInfo.pro_start_time}
                            />
                        </Box>

                    </PaperLayout>
                </Box>
            )}

        </Dashboard>
    )
}

export default ShowNewReservation
