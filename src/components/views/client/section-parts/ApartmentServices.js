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

import Counter from './Counter';

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

const ApartmentServices = ({ t }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const store = useStore();

    const settings = store.getState().estimation.settings;

    const [animals, setAnimals] = useState({ dog: settings.houseworkPersonalization.dog, cat: settings.houseworkPersonalization.cat });
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
            houseworkPersonalization: { ...store.getState().estimation.settings.houseworkPersonalization, [name]: value },
        };

        estimationHousingUpdate(requestBody)(dispatch);
        fetchEstimation(requestBody)(dispatch);
        setAnimals({ ...animals, [name]: value });
    };

    return (
        <Box className="StudioServices__choice-container">
            <Typography variant="h3" className="HousingType__title">{t("Client.Logement.title3")}</Typography>

            <Box className="StudioServices__choice-form">
            <Counter name="kitchen" title={t("Client.Logement.housingSpecificity_kitchen")} iconSrc="images/icon_kitchen.svg" />
                <Counter name="salon" title={t("Client.Logement.housingSpecificity_livingroom")} iconSrc="images/icon_sofa.svg" />
                <Counter name="dining_room" title={t("Client.Logement.housingSpecificity_dining_room")} iconSrc="images/icon_hotel.svg" />
                <Counter name="bedroom" title={t("Client.Logement.housingSpecificity_bedroom")} iconSrc="images/icon_moon.svg" description={t("Client.Logement.housingSpecificity_bedroom_desc")}/>
                <Counter name="bathroom" title={t("Client.Logement.housingSpecificity_bathroom")} iconSrc="images/icon_washbasin.svg" />
                <Counter name="shower" title={t("Client.Logement.housingSpecificity_shower")} iconSrc="images/icon_shower.svg" />
                <Counter name="bathtub" title={t("Client.Logement.housingSpecificity_bathtub")} iconSrc="images/icon_bathtub.svg" />
                <Counter name="washbasin" title={t("Client.Logement.housingSpecificity_washroom")} iconSrc="images/icon_water.svg" />
                <Counter name="floor" title={t("Client.Logement.housingSpecificity_floor")} iconSrc="images/icon_stares.svg" description={t("Client.Logement.housingSpecificity_floor_desc")}/>

                <FormControl className={classes.formControl} error={errors?.dog ? true : false}>
                    <InputLabel htmlFor="dog">
                        <img
                            src={"images/icon_animal.svg"}
                            alt="animal"
                        />
                        {t("Client.Logement.houseworkPersonalization_dog")}
                    </InputLabel>

                    <Select
                        value={animals.dog}
                        onChange={handleAnimalsChange}
                        inputProps={{
                            name: 'dog',
                            id: 'dog',
                        }}
                    >
                        <MenuItem value=""></MenuItem>
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
                        {t("Client.Logement.houseworkPersonalization_cat")}
                    </InputLabel>

                    <Select
                        value={animals.cat}
                        onChange={handleAnimalsChange}
                        inputProps={{
                            name: 'cat',
                            id: 'cat',
                        }}
                        className="select"
                    >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={true}>{t("Client.yes")}</MenuItem>
                        <MenuItem value={false}>{t("Client.no")}</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
};

export default withTranslation()(ApartmentServices);
