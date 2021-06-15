import { Box } from '@material-ui/core'
import React from 'react'
import Reservation from './component/Reservation'

const NewReservationsList = ({ reservations }) => {
    return (
        <Box>
            {
                reservations === null ? (<Box>No result</Box>) : 
                (
                    <Box >
                        {
                            reservations.map((res, index) => {
                                return(
                                    <Reservation res={res} />
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
