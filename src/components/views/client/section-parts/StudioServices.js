import { withTranslation } from "react-i18next"
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const StudioServices = ({ t }) => {
    const classes = useStyles()

    const [state, setState] = useState({
        dog: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    return (
        <Box className="StudioServices__choice-container">
            <Typography variant="h3" className="HousingType__title">{t("Client.Logement.title3")}</Typography>

            <Box>
                <p>{t("Client.Logement.housingType1_text1")}</p>
                <ul>
                    <li>{t("Client.Logement.housingType1_text2")}</li>
                    <li>{t("Client.Logement.housingType1_text3")}</li>
                </ul>
            </Box>

            <Box className="StudioServices__choice-form">
                <FormControl className={classes.formControl}>

                    <InputLabel htmlFor="dog">{t("Client.Logement.housingSpecificity_10")}</InputLabel>
                    <Select
                        value={state.dog}
                        onChange={handleChange}
                        inputProps={{
                            name: 'dog',
                            id: 'dog',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Oui</option>
                        <option value={20}>Non</option>
                    </Select>

                </FormControl>
                <FormControl className={classes.formControl}>

                    <InputLabel htmlFor="cat">{t("Client.Logement.housingSpecificity_11")}</InputLabel>
                    <Select
                        value={state.cat}
                        onChange={handleChange}
                        inputProps={{
                            name: 'cat',
                            id: 'cat',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Oui</option>
                        <option value={20}>Non</option>
                    </Select>

                </FormControl>

                <FormControl className={classes.formControl}>

                    <InputLabel htmlFor="other">{t("Client.Logement.housingSpecificity_12")}</InputLabel>
                    <Select
                        value={state.cat}
                        onChange={handleChange}
                        inputProps={{
                            name: 'other',
                            id: 'other',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Oui</option>
                        <option value={20}>Non</option>
                    </Select>

                </FormControl>
            </Box>


        </Box>
    )
}

export default withTranslation()(StudioServices)
