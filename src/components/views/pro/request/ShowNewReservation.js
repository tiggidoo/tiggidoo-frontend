import { Box, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getRequest, serndReservation } from '../../../../store/actions/reservationAction'
import Dashboard from '../../../layout/Dashboard'
import PaperLayout from '../../../layout/PaperLayout'
import OfferProposition from './component/request/OfferProposition'
import ReqClientInfo from './component/request/ReqClientInfo'
import ReqHeader from './component/request/ReqHeader'

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

    //console.log('Esta es la id:  --  ', reservation)

    const sendReservation = (dataForm) => {
        console.log('No tiene nada que decisr: ', dataForm)
        dispatch(serndReservation(access_token, dataForm))
    }

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
                        
                        <Box className={classes.reqOffer}>
                            <OfferProposition 
                                totalPrice={reservationInfo.reservation.total_price} 
                                isCalculateTax={pro.tax} 
                                sendReservation={sendReservation} 
                                statusId={statusId}
                            />
                        </Box>

                    </PaperLayout>
                </Box>
            )}

        </Dashboard>
    )
}

export default ShowNewReservation
