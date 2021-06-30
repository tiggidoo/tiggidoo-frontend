import React from 'react'
import { Box, Typography, TextareaAutosize } from '@material-ui/core'
import CheckBoxCustom from '../../../../../share/inputs/CheckBoxCustom'

const AccesAndAccommoInfo = () => {
    
    const handleCheck = () =>{

    }

    return (
        <Box>
            <Box mb={1}>
                <Typography variant="h4">ACCES ET INFORMATIONS LOGEMENT</Typography>
            </Box>
            <Box display="flex" flexWrap="wrap">
                <Box>
                    <CheckBoxCustom 
                        value={true}
                        name="client"
                        handleChange={handleCheck}
                        label="Le client sera sur place"                        
                    />
                </Box>
                <Box>
                    <CheckBoxCustom 
                        value={true}
                        name="client"
                        handleChange={handleCheck}
                        label="Logement avec boite à clé"                        
                    />
                </Box>
            </Box>
            <Box>
                <TextareaAutosize 
                    aria-label="minimum height" 
                    rowsMin={3} 
                    placeholder="Entrer des commentaires" 
                    style={{width: '100%', marginTop: '16px', padding: '10px'}} 
                />
            </Box>
        </Box>    
    )
}

export default AccesAndAccommoInfo
