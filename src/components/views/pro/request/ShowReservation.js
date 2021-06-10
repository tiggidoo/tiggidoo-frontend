import { Box, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getRequest } from '../../../../store/actions/reservationAction'
import Dashboard from '../../../layout/Dashboard'
import PaperLayout from '../../../layout/PaperLayout'
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
        padding: theme.spacing(5, 4),
        '@media(max-width: 600px)':{
            padding: theme.spacing(2, 0),
        }
    },
    reqClient:{
        padding: theme.spacing(5, 4),
        '@media(max-width: 600px)':{
            padding: theme.spacing(2, 0),
        }
    }
}))

const ShowReservation = () => {
    const classes = useStyle()

    const { auth:{pro, access_token, isLoggedIn}, reservationInfo } = useSelector(
        state => ({
            auth: state.auth,
            reservationInfo: state.reservation.reservation
        })
    )

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getRequest(access_token, id))
    }, [access_token, id])

    //console.log('Esta es la id:  --  ', reservation)

    return (
        <Dashboard
            user = { pro }
            token = { access_token }
            isLoggedIn = {isLoggedIn}
        >
            {(reservationInfo !== null) && (
                <Box className={classes.workArea}>
                    
                    <PaperLayout>
                        <Box className={classes.reqHeader} borderBottom={1}>
                            <ReqHeader 
                                uuid={reservationInfo.reservation.uuid} 
                                service={reservationInfo.reservation.service.fr} 
                                date={reservationInfo.reservation.housework.start_date} 
                                duration={reservationInfo.reservation.total_duration} 
                                //reservationStatusId={reservationStatusId}
                            />
                        </Box>
                        <Box className={classes.reqClient} borderBottom={1}>
                            <ReqClientInfo 
                                housing={reservationInfo.reservation.housing} 
                                client={reservationInfo.reservation.client} 
                                totalPrice={reservationInfo.reservation.total_price} 
                                personalization={reservationInfo.reservation.housework.personalization} 
                            />
                        </Box>
{/*                         
                        <Box px={5} py={4} borderBottom={1}>
                            <ClientInfo housing={request.housing} client={request.client} totalPrice={request.total_price} personalization={request.housework.personalization} />
                        </Box>
                        <FilterAndReponse 
                            id={id} 
                            address={ request.client.address} 
                            personalization={request.housework.personalization }
                            reservationStatusId={reservationStatusId}
                        />
                         */}
                    </PaperLayout>
                </Box>
            )}

        </Dashboard>
    )
}

export default ShowReservation
