import { withTranslation } from "react-i18next"
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Counter from "./Counter";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));


const LoftServices = ({ t }) => {
    const classes = useStyles()

    const [state, setState] = useState({
        dog: '',
        name: '',
        cat: '',
        other: '',
    });

    // Handle select box change
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

            <Box className="StudioServices__choice-form">
                <Counter title={t("Client.Logement.housingSpecificity_1")} iconSrc="images/icon_kitchen.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_2")} iconSrc="images/icon_sofa.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_3")} iconSrc="images/icon_hotel.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_4")} iconSrc="images/icon_moon.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_5")} iconSrc="images/icon_washbasin.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_6")} iconSrc="images/icon_shower.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_7")} iconSrc="images/icon_bathtub.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_8")} iconSrc="images/icon_water.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_9")} iconSrc="images/icon_stares.svg" />

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
                    <InputLabel htmlFor="cat">
                        <img
                            src={"images/icon_animal.svg"}
                            alt="cats"
                        />
                        {t("Client.Logement.housingSpecificity_11")}
                    </InputLabel>

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
                    <InputLabel htmlFor="other">
                        <img
                            src={"images/icon_animal.svg"}
                            alt="other"
                        />
                        {t("Client.Logement.housingSpecificity_12")}
                    </InputLabel>

                    <Select
                        value={state.other}
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

export default withTranslation()(LoftServices)
