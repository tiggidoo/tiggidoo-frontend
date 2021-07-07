import { Box } from '@material-ui/core'
import React, { useEffect } from 'react'
import Reservation from './component/Reservation'
import { useDispatch, useSelector } from 'react-redux'
import { getListRequest } from '../../../../store/actions/reservationAction'
import Processing from '../../../layout/Processing'

const NewReservationsList = ({ token, statusId }) => {

    const {  reservations } = useSelector(
        state => ({
            reservations: state.reservation.reservations
        })
    ) 

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListRequest(token, statusId))
    }, [token, statusId, dispatch])

    return (
        <Box>
            {
                reservations === null ? (<Processing />) : 
                (
                    <Box >
                        {
                            reservations.map((res, index) => {
                                return(
                                    <Reservation key={index} res={res} statusId={statusId}/>
                                )
                            })
                        }
                    </Box>
                )
            }
        </Box>
    )
}

export default NewReservationsList
