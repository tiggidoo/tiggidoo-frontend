import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../../layout/Dashboard'

const DashboardPro = ({ children }) => {
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
            {children}
        </Dashboard>
    )
}

export default DashboardPro