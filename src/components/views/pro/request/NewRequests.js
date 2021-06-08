import { Box } from '@material-ui/core'
import React from 'react'
import Reservation from './component/Reservation'

const NewRequests = ({ request }) => {
    return (
        <Box>
            {
                request === null ? (<Box>No result</Box>) : 
                (
                    <Box>
                        {
                            request.map((res, index) => {
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

export default NewRequests
