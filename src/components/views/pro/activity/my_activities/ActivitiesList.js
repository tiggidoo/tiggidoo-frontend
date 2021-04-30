import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'

const ActivitiesList = () => {
    return (
        <Grid container >

            <Grid item xs={12}>
                <Box mb={1}>                    
                    <Typography component="h5" variant="subtitle1" >
                        Le 12 mars 2020
                    </Typography>
                    <Typography component="h5" variant="h6" >
                        Matin 8H - 13H
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={3}>
                <Box>
                    <Typography component="h5" variant="subtitle2">Heure</Typography>
                </Box>
                <Box>
                    <Typography component="h5" variant="h6">8H00</Typography>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box>
                    <Typography component="h5" variant="subtitle2">Heure</Typography>
                </Box>
                <Box>
                    <Typography component="h5" variant="h6">8H00</Typography>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box>
                    <Typography component="h5" variant="subtitle2">Heure</Typography>
                </Box>
                <Box>
                    <Typography component="h5" variant="h6">8H00</Typography>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box>
                    <Typography component="h5" variant="subtitle2">subtitle2</Typography>
                </Box>
                <Box>
                    <Typography component="h5" variant="h6">8H00</Typography>
                </Box>
            </Grid>


        </Grid>
    )
}

export default ActivitiesList
