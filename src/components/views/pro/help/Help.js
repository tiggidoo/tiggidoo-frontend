import React from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Dashboard from '../../../layout/Dashboard'


const Help = () => {
    
    const { auth, token, isLoggedIn } = useSelector(
        state => ({
            auth: state.auth.pro,
            token: state.access_token,
            isLoggedIn: state.auth.isLoggedIn
        })
    ) 

    return (
        <Dashboard
            user = { auth }
            token = { token }
            isLoggedIn = {isLoggedIn}
        >

            <Box>Help</Box>
        </Dashboard>
    )
}

export default Help