import React from 'react'
import { Box, Typography, makeStyles, Button } from '@material-ui/core'
import CheckBoxCustom from '../../../../../share/inputs/CheckBoxCustom'

const useStyle = makeStyles((theme) => ({
    list: {
        display: 'flex',
        '@media(max-width: 768px)': {
            flexDirection: 'column'
        }
    },
    btnArea: {
        width: '100%', 
        fontSize: '1.7rem', 
        display: 'flex', 
        flexDirection: 'column',
        '& .MuiButton-label':{
            '@media(max-width: 768px)': {
                fontSize: '15px'
            }
            //fontSize: '15px'
        }
    }
}))

const AccommodationList = () => {
    const classes = useStyle()

    return (
        <Box>
            <Box mb={1}>
                <Typography variant="h4">LISTE MENAGE DU CLIENT</Typography>
            </Box>
            <Box className={classes.list}>

                <Box width={1}>
                    <Box>
                        <CheckBoxCustom 
                            value={true}
                            name="client"
                            //handleChange={handleCheck}
                            label="Faire la poussiere des etageres"
                        />
                    </Box>
                    <Box>
                        <CheckBoxCustom 
                            value={true}
                            name="client"
                            //handleChange={handleCheck}
                            label="Sortir les poubelles"
                        />
                    </Box>
                    <Box>
                        <CheckBoxCustom 
                            value={true}
                            name="client"
                            //handleChange={handleCheck}
                            label="Faires les lits"
                        />
                    </Box>
                    <Box>
                        <CheckBoxCustom 
                            value={true}
                            name="client"
                            //handleChange={handleCheck}
                            label="Ne pas faire la chambre"
                        />
                    </Box>

                </Box>
                <Box className={classes.btnArea}>
                    <Box>
                        Vous pouvez cliquez sur « commencer la prestation » 30 min avant le début de la prestation.
                    </Box>
                    <Box pt={3} pb={3} textAlign="center">
                        <Button variant="contained" color="primary">COMMENCER LA PRESTATION</Button>
                    </Box>
                    <Box>
                        Pour débuter la prestation nous vous demanderons d’activer une seule fois la géolocalisation pour nous assurer que vous vous trouvez bien près du logement
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default AccommodationList