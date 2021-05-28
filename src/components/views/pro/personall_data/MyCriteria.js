import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core'
//import { useSelector } from 'react-redux'
import TitleForm from '../../../layout/TitleForm'
import CheckBoxCustom from '../../../share/inputs/CheckBoxCustom'

const useStyle = makeStyles((theme) => ({
    btn: {
        padding: theme.spacing(4, 4, 2, 4),
        textAlign: 'center',
        '@media(min-width: 600px)':{
            textAlign: 'right',
        }
    },
    myCriteria: {
        '& .MuiCheckbox-root': {
            padding: '5px'
        },
        '& h5':{
            fontWeight: '100'
        },
        '& .MuiFormControlLabel-label': {
            fontSize: '1.7rem',
            fontWeight: '100'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '2.5rem'
        }

    }
}))

const MyCriteria = () => {
    const classes = useStyle();

    // const { auth, token, isLoggedIn } = useSelector(
    //     state => ({
    //         auth: state.auth.pro,
    //         token: state.access_token,
    //         isLoggedIn: state.auth.isLoggedIn
    //     })
    // ) 

    const handleChange = () => {

    }

    return (

            <Box  className={classes.myCriteria}>
                <Grid item sm={12}>
                    <TitleForm title={'PERSONAL INFORMATION'} subTitle={'My criteria'} />
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography component="h5" variant="h5" >
                            J'accepte d'être contacté pour effectuer une prestation avec extra pour :
                        </Typography>
                        <Typography component="h6" variant="h6" >
                            (Chaque montant sera a indiquer lors de l'acceptation d'une demande)
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <Box ml={3} mt={1} display="flex" flexDirection="column">
                            {/* <FormControlLabel
                                control={<Checkbox name="fr" color="primary" checked={false} />}
                                label={"Matériel: Aspirateur, mope etc"}
                            /> */}
                            <CheckBoxCustom
                                name="en"
                                label="Matériel: Aspirateur, mope etc"
                                value={true}
                                handleChange={handleChange}
                            />
                            <FormControlLabel
                                control={<Checkbox  name="en" color="primary" checked={true} />}
                                label={"Produit vert/écologique"}
                            />
                            <FormControlLabel
                                control={<Checkbox  name="en" color="primary" checked={true} />}
                                label={"Produit normaux"}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <Box mt={3}>
                        <Box mb={1}>
                                <Typography component="h5" variant="h5" >
                                    J'accepte d'être contacté pour des prestations avec option (Nettoyage frigo etc;)
                                </Typography>
                                <Box ml={3}>                                    
                                    <RadioGroup row aria-label="gender" name="authorization" value={'1'} 
                                        onChange={handleChange}>
                                        <FormControlLabel labelPlacement="end" value="1" control={<Radio color="primary" />} label={'Oui'} />
                                        <FormControlLabel labelPlacement="end" value="0" control={<Radio color="primary" />} label={'Non'} />
                                    </RadioGroup>                                    
                                </Box>
                            </Box>
                            <Box mb={1}>
                                <Typography component="h5" variant="h5" >
                                    Je suis à l'aise de travailler en présence du client dans le logement.
                                </Typography>
                                <Box ml={3}>                                   
                                    <RadioGroup row aria-label="gender" name="authorization" value={'1'} 
                                        onChange={handleChange}>
                                        <FormControlLabel labelPlacement="end" value="1" control={<Radio color="primary" />} label={'Oui'} />
                                        <FormControlLabel labelPlacement="end" value="0" control={<Radio color="primary" />} label={'Non'} />
                                    </RadioGroup>                                    
                                </Box>
                            </Box>
                            <Box mb={1}>
                                <Typography component="h5" variant="h5" >
                                    J'accepte de travailler en présence d'animaux de compagnie
                                </Typography>
                                <Box ml={3}>                                   
                                    <RadioGroup row aria-label="gender" name="authorization" value={'1'} 
                                        onChange={handleChange}>
                                        <FormControlLabel labelPlacement="end" value="1" control={<Radio color="primary" />} label={'Oui'} />
                                        <FormControlLabel labelPlacement="end" value="0" control={<Radio color="primary" />} label={'Non'} />
                                    </RadioGroup>                                    
                                </Box>
                            </Box>
                                                  
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box className={classes.btn}>
                            <Button variant="contained" color="primary">MODIFIER MES CRITERES</Button>
                        </Box>
                    </Grid>                  
                </Grid>
            </Box>
    )
}

export default MyCriteria