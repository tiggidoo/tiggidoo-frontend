import React from 'react'
import { makeStyles, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper  } from '@material-ui/core'
import SubTitleForm from '../../../../layout/SubTitleForm'
import CheckBoxCustom from '../../../../share/inputs/CheckBoxCustom';

const useStyle = makeStyles((theme) => ({
    borderRight: {
        borderRight: 'none',
        margin: theme.spacing(0, 0, 0, 2),
        '@media(min-width: 600px)': {
            margin: theme.spacing(0, 5, 5, 5),
        },
        '@media(min-width: 768px)': {  
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
            boxShadow: 'none',
            overflowX: 'unset'
        },
        '@media(min-width: 960px)': {
            margin: theme.spacing(0, 5, 0, 0),   
        }
    },
    checkBox: {
        ' & .MuiIconButton-label':{
            marginTop: '-10px',
            marginLeft: '-4px'
        }
    }
}))

const Availability = ({ availability, hancleChange }) => {
    const classes = useStyle();

    function createData(title, day, am, pm) {
        return { title, day, am, pm };
    }
      
    const rows = [
        createData('Dimanche', 'Su' , availability['am_Su'] , availability['pm_Su']),
        createData('Lundi', 'Mo', availability['am_Mo'] , availability['pm_Mo']),
        createData('Mardi', 'Tu', availability['am_Tu'] , availability['pm_Tu']),
        createData('Mercredi', 'We', availability['am_We'] , availability['pm_We']),
        createData('Jeudi', 'Th', availability['am_Th'] , availability['pm_Th']),
        createData('Vendredi', 'Fr', availability['am_Fr'] , availability['pm_Fr']),
        createData('Samdi', 'Sa', availability['am_Sa'] , availability['pm_Sa']),
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
                            <TableRow key={row.title}>
                                {/* <TableCell component="th" scope="row">{row.name}</TableCell> */}
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="center">
                                    <Box className={classes.checkBox}>
                                        <CheckBoxCustom
                                            value = {row.am}
                                            name = {`am_${row.day}`}
                                            handleChange={hancleChange}
                                            label=""
                                        />
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box className={classes.checkBox}>
                                        <CheckBoxCustom
                                            value = {row.pm}
                                            name = {`pm_${row.day}`}
                                            handleChange={hancleChange}
                                            label=""
                                        />
                                    </Box>
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
