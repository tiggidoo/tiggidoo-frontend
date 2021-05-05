import React from 'react'
import { makeStyles, Box, Checkbox, FormControlLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper  } from '@material-ui/core'
import SubTitleForm from '../../../../layout/SubTitleForm'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyle = makeStyles((theme) => ({
    borderRight: {
        borderRight: 'none',
        margin: theme.spacing(0, 0, 0, 2),
        '@media(min-width: 600px)': {
            margin: theme.spacing(0, 5, 5, 5),
        },
        '@media(min-width: 768px)': {
            borderRight: '1px solid #9a9a9a',    
            margin: theme.spacing(0, 15, 5, 15),
            borderRight: 'none',
        },
        '@media(min-width: 960px)': {
            borderRight: '1px solid #9a9a9a',    
            margin: 0
        }
    },
    spacingTable: {
        '& .MuiTableCell-root': {
            padding: 0,
            borderBottom: 'none'
        },
        '& .MuiFormControlLabel-root': {
            margin: 0,
            '& .MuiIconButton-root': {
                padding: '5px 0'
            }
        },
        '& .MuiTableContainer-root':{
            boxShadow: 'none'
        },
        '@media(min-width: 960px)': {
            margin: theme.spacing(0, 5, 0, 0),   
        }
    }
}))

const Availability = () => {
    const classes = useStyle();

    function createData(name, calories, fat) {
        return { name, calories, fat };
      }
      
      const rows = [
        createData('Dimanche', 159, 6.0),
        createData('Lundi', 237, 9.0),
        createData('Mardi', 262, 16.0),
        createData('Mercredi', 159, 6.0),
        createData('Jeudi', 237, 9.0),
        createData('Vendredi', 262, 16.0),
        createData('Samdi', 262, 16.0),
      ];

    return (
        <Box className={classes.borderRight}>
            <Box mb={3}>
                <SubTitleForm subTitle={'Indiquez vos disponibilites'} />
            </Box>

            <Box className={classes.spacingTable}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">AM</TableCell>
                                <TableCell align="center">PM</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                {/* <TableCell component="th" scope="row">{row.name}</TableCell> */}
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="center">
                                    <FormControlLabel
                                        control={
                                            <Checkbox  
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                                name="en" 
                                                color="primary" 
                                                checked={true} 
                                            />
                                        }
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <FormControlLabel
                                        control={
                                            <Checkbox  
                                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                                name="fr" 
                                                color="primary" 
                                                checked={false} 
                                            />
                                        }
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default Availability
