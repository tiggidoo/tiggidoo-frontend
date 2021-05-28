import React from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'
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
        padding: theme.spacing(20, 3 , 2, 3),
        '@media (max-width:1200px)': {  //992px
            padding: theme.spacing(18, 3 , 2, 3),
            width: '100vw',
            overflow: 'auto'
        },
        '@media (max-width:992px)': {  //992px
            padding: theme.spacing(10, 0, 14, 0),
        }
    },
    container: {
        '@media(min-width: 1500px)': {
            maxWidth: '1450px',
        }
    },
    bkgPadding: {
        backgroundColor: '#fff',
        padding: theme.spacing(6, 0, 0, 0),
        borderRadius: '4px',
        minHeight: '80vh',
        '@media(max-width: 600px)': {
            padding: 0
        }
    }
}))

const Dashboard = ({children, user, token, isLoggedIn}) => {
    const classes = useStyle();
    const name = `${user.credential.firstName}-${user.credential.lastName}`
    const urlAvatar = user.avatar.url

    return (
        <BodyWrapper>
            <Header isLoggedIn={isLoggedIn} name={name} urlAvatar={urlAvatar} />
            <Container className={classes.container} maxWidth="lg">
                <Box className={classes.workArea}>
                    
                    <NavBar urlAvatar={urlAvatar} />
                    <Box className={classes.content}>
                        <Box className={classes.bkgPadding}>
                            {children}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </BodyWrapper>        
    )
}

export default Dashboard
