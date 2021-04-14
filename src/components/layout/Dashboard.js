import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import BodyWrapper from './BodyWrapper'
import Header from './Header'
import NavBar from './NavBar/NavBar'

const useStyle = makeStyles((theme) => ({
    workArea:{
        display: 'flex',
        height: '100vh'
    },
    content: {
        width: '75vw',
        //backgroundColor: '#dcdcdc',
        padding: theme.spacing(26, 3 , 2, 3),
        '@media (max-width:992px)': { 
            width: '100vw',
            padding: theme.spacing(10, 0, 20, 0),
            overflow: 'auto'
        },
    }
}))

const Dashboard = ({children, user, token, isLoggedIn}) => {
    const classes = useStyle();
    const name = `${user.credential.firstName}-${user.credential.lastName}`
    const urlAvatar = user.avatar.url

    return (
        <BodyWrapper>
            <Header isLoggedIn={isLoggedIn} name={name} urlAvatar={urlAvatar} />
            <Container maxWidth="lg">
                <Box className={classes.workArea}>
                    <NavBar urlAvatar={urlAvatar} />
                    <Box className={classes.content}>
                        {children}
                    </Box>
                </Box>
            </Container>
        </BodyWrapper>        
    )
}

export default Dashboard
