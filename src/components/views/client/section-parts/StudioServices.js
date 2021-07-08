import { withTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { useDispatch, useStore } from 'react-redux';
import { estimationHousingUpdate, fetchEstimation } from '../../../../store/actions/estimationAction';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,

        '@media (max-width:599px)': {
            minWidth: "97px",
            margin: 0,
        }
    },
}));

const StudioServices = ({ t }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const store = useStore();

    const houseworkPersonalization = store.getState().estimation.settings.houseworkPersonalization;

    const [animals, setAnimals] = useState({ dog: houseworkPersonalization.dog, cat: houseworkPersonalization.cat });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        store.subscribe(() => {
            setErrors(store.getState().estimation.housingErrorsList);
        });
    }, []);

    const handleAnimalsChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        let requestBody = {
            ...store.getState().estimation.settings,
            houseworkPersonalization: { ...houseworkPersonalization, [name]: value },
        };

        estimationHousingUpdate(requestBody)(dispatch);
        fetchEstimation(requestBody)(dispatch);
        setAnimals({ ...animals, [name]: value });
    };

    return (
        <Box className="StudioServices__choice-container">
            <Typography variant="h3" className="HousingType__title">{t("Client.Logement.title3")}</Typography>

            <Box>
                <p>{t("Client.Logement.housingType_studio_text1")}</p>

                <ul className="StudioServices__list">
                    <li>{t("Client.Logement.housingType_studio_text2")}</li>
                    <li>{t("Client.Logement.housingType_studio_text3")}</li>
                </ul>
            </Box>

            <Box className="StudioServices__choice-form">
                <FormControl className={classes.formControl} error={errors?.dog ? true : false}>
                    <InputLabel htmlFor="dog">
                        <img
                            src={"images/icon_animal.svg"}
                            alt="animal"
                        />
                        {t("Client.Logement.housingSpecificity_dog")}
                    </InputLabel>

                    <Select
                        value={animals.dog}
                        onChange={handleAnimalsChange}
                        inputProps={{
                            name: 'dog',
                            id: 'dog',
                        }}

                    >
                        <MenuItem aria-label="None" value="" />
                        <MenuItem value={true}>{t("Client.yes")}</MenuItem>
                        <MenuItem value={false}>{t("Client.no")}</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl} error={errors?.cat ? true : false}>
                    <InputLabel htmlFor="cat">
                        <img
                            src={"images/icon_animal.svg"}
                            alt="animal"
                        />
                        {t("Client.Logement.housingSpecificity_cat")}
                    </InputLabel>

                    <Select
                        value={animals.cat}
                        onChange={handleAnimalsChange}
                        inputProps={{
                            name: 'cat',
                            id: 'cat',
                        }}

                    >
                        <MenuItem aria-label="None" value=""></MenuItem>
                        <MenuItem value={true}>{t("Client.yes")}</MenuItem>
                        <MenuItem value={false}>{t("Client.no")}</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
};

export default withTranslation()(StudioServices);
