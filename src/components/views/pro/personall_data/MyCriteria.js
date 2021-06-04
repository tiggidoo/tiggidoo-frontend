import React, { useState } from 'react'
import { Box, Button, Grid, makeStyles, RadioGroup, Typography, FormControl } from '@material-ui/core'
//import { useSelector } from 'react-redux'
import TitleForm from '../../../layout/TitleForm'
import CheckBoxCustom from '../../../share/inputs/CheckBoxCustom'
import DiscreteSlider from '../../../share/inputs/DiscreteSlider'
import Input from '../../../share/inputs/Input'
import RadioCustom from '../../../share/inputs/RadioCustom';

const useStyle = makeStyles((theme) => ({
    btn: {
        padding: theme.spacing(4, 4, 2, 4),
        marginBottom: theme.spacing(12),
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

    },
    quantityStyle:{
        color: theme.palette.primary.main,
        fontWeight:'bold'
    },
    checkStyle:{
        margin: theme.spacing(1,0),
        '& .MuiFormControlLabel-label':{
            fontSize: '1.5rem'
        }
    }
}))

const MyCriteria = ({ updateProCriteria, criterion }) => {
    const classes = useStyle();

    console.log('criterion: ', criterion)

    const [formData, setFormData] = useState({
        postCode: criterion.postcode,
        scope: criterion.scope,
        oven: criterion.oven === 1 ? true : false,
        fridge: criterion.fridge === 1 ? true : false,
        bed: criterion.bed === 1 ? true : false,
        vacuum: criterion.vacuum === 1 ? true : false,
        productStandard: criterion.product_standard === 1 ? true : false,
        productEcological: criterion.product_ecological === 1 ? true : false,
        withClient: criterion.with_client.toString(),
        cat: criterion.cat.toString(),
        dog: criterion.dog.toString()
    })

    const handleChange = (e) => {
        
        if(e.target.type === 'checkbox'){
            setFormData({...formData, [e.target.name]: e.target.checked})
        }else{
            e.preventDefault()
            setFormData({...formData, [e.target.name]: e.target.value})
        }
    }

    const handleScope = (event, newValue) => {
        setFormData({...formData, 'scope': newValue})
    };

    const sendFormData = (e) => {
        e.preventDefault()
        updateProCriteria(formData)
    }

    return (
        <Grid container>
            <Grid item sm={12}>
                <TitleForm title="LOCALISATION" />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" flexDirection="column" my={3}>
                    <Box mb={2}>
                        Où souhaitez-vous effectuer vos prestations ?
                    </Box>
                    <Box>
                        <Input
                            id="postCode" 
                            label="" 
                            size="small" 
                            type='text'
                            width="50%"
                            onBlur={e=>handleChange(e)} 
                            defaultValue={formData.postCode} 
                            variant="outlined" 
                            readOnly={false}
                            error=""
                        />
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
                <Box display="flex" flexDirection="column" my={3}>
                    <Box mb={2} display="flex" flexDirection="row" justifyContent="space-between">
                        <Box>Dans un rayon autour de</Box>
                        <Box className={classes.quantityStyle}>{`${formData.scope}Km`}</Box>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <DiscreteSlider value={formData.scope} handleScope={handleScope}/>
                    </Box>
                </Box>                   
            </Grid>

            <Grid item sm={12}>
                <Box mt={6} mb={4}>
                    <TitleForm title="PERSONNALISEZ VOS PRESTATIONS" />
                    <Typography component="h6" variant="h6" >
                        Acceptez-vous d’être contacté pour réaliser des prestations avec options ?
                    </Typography>
                    <Typography component="h6" variant="h6" >
                        (Le montant de chaque option sera a indiquer lors de votre proposition de demande)
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className={classes.checkStyle}>
                    <CheckBoxCustom
                        name="vacuum"
                        label="Matériel: Aspirateur, mope …"
                        value={formData.vacuum}
                        handleChange={e=>handleChange(e)}
                    />
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className={classes.checkStyle}>
                    <CheckBoxCustom
                        name="productStandard"
                        label="Produits standards"
                        value={formData.productStandard}
                        handleChange={e=>handleChange(e)}
                    />
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className={classes.checkStyle}>
                    <CheckBoxCustom
                        name="productEcological"
                        label="Produits écologiques"
                        value={formData.productEcological}
                        handleChange={e=>handleChange(e)}
                    />
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className={classes.checkStyle}>
                    <CheckBoxCustom
                        name="fridge"
                        label="Nettoyage frigo"
                        value={formData.fridge}
                        handleChange={e=>handleChange(e)}
                    />
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className={classes.checkStyle}>
                    <CheckBoxCustom
                        name="oven"
                        label="Nettoyage four"
                        value={formData.oven}
                        handleChange={e=>handleChange(e)}
                    />
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box className={classes.checkStyle}>
                    <CheckBoxCustom
                        name="bed"
                        label="Faire lits avec draps propres"
                        value={formData.bed}
                        handleChange={e=>handleChange(e)}
                    />
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box mt={8}>
                    <Typography component="h6" variant="h6" >
                        Êtes-vous à l’aise de travailler en présence du client dans le logement ?
                    </Typography>
                </Box>
                <Box mt={1}>                      
                    <FormControl component="fieldset">
                        <RadioGroup value={formData.withClient} defaultValue={'0'} aria-label="gender" name="withClient" onClick={e=>handleChange(e)}>
                            <Box display="flex" flexDirection="row">
                                <RadioCustom value="1" label="Oui" defaultValue={formData.withClient} />
                                <RadioCustom value="0" label="Non" defaultValue={formData.withClient} />
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box mt={2}>
                    <Typography component="h6" variant="h6" >
                        Êtes-vous à l’aise de travailler en présence de chien ?
                    </Typography>
                </Box>
                <Box mt={1}>                      
                    <FormControl component="fieldset">
                        <RadioGroup value={formData.cat} defaultValue={'0'} aria-label="gender" name="cat" onChange={e=>handleChange(e)}>
                            <Box display="flex" flexDirection="row">
                                <RadioCustom value="1" label="Oui" defaultValue={formData.cat} />
                                <RadioCustom value="0" label="Non" defaultValue={formData.cat} />
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box mt={2}>
                    <Typography component="h6" variant="h6" >
                        Êtes-vous à l’aise de travailler en présence de chats ?
                    </Typography>
                </Box>
                <Box mt={1} mb={5}>                      
                    <FormControl component="fieldset">
                        <RadioGroup value={formData.dog} defaultValue={'0'} aria-label="gender" name="dog" onChange={e=>handleChange(e)}>
                            <Box display="flex" flexDirection="row">
                                <RadioCustom value="1" label="Oui" defaultValue={formData.dog} />
                                <RadioCustom value="0" label="Non" defaultValue={formData.dog} />
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box className={classes.btn}>
                    <Button variant="contained" color="primary" onClick={ e => sendFormData(e) } >ENREGISTRE</Button>
                </Box>
            </Grid>                  
        </Grid>
    )
}

export default MyCriteria