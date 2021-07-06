import { withTranslation, useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import { useDispatch, useStore } from 'react-redux';
import { estimationHousingUpdate, fetchEstimation } from '../../../../store/actions/estimationAction';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Counter from './Counter';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
         
      '@media (max-width:599px)': { 
        minWidth: "97px",
        margin: 0
      }
    },
}));

const CondoServices = ({ t }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const store = useStore();

    const [housingSize, setHousingSize] = useState('');
    const [animals, setAnimals] = useState({ dog: '', cat: '', other: '' });
    const [housingSizesList, setHousingSizesList] = useState([]);

    const { i18n } = useTranslation();
    const lang = i18n.language;

    const handleHousingSizeChange = (event) => {
        const value = event.target.value;

        let requestBody = {
            ...store.getState().estimation.settings,
            housingSizeId: value,
        };

        estimationHousingUpdate(requestBody)(dispatch);
        fetchEstimation(requestBody)(dispatch);
        setHousingSize(value);
    };

    const handleAnimalsChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        let requestBody = {
            ...store.getState().estimation.settings,
            houseworkPersonalization: { ...store.getState().estimation.settings.houseworkPersonalization, [name]: value },
        };

        estimationHousingUpdate(requestBody)(dispatch);
        fetchEstimation(requestBody)(dispatch);
        setAnimals({
            ...animals,
            [name]: value,
        });
    };

    const fetchHousingSizesList = async () => {
        const res = await fetch(`https://www.api-tiggidoo.com/api/housingSizeList/${lang}`);
        const data = await res.json();

        return data;
    }

    useEffect(() => {
        const getHousingSizesList = async () => {
            const sizesFromServer = await fetchHousingSizesList();
            setHousingSizesList(sizesFromServer.sizes);
        }

        getHousingSizesList();
    }, []);

    const housingSizes = [];

    for (const [key, value] of Object.entries(housingSizesList)) {
        housingSizes[key] = value;
    }

    return (
        <Box className="StudioServices__choice-container">
            <Typography variant="h3" className="HousingType__title">{t("Client.Logement.title2")}</Typography>

            <Box className="ComboServices__size">
                <FormControl className={classes.formControl}>
                    <Select
                        value={housingSize}
                        onChange={handleHousingSizeChange}
                        inputProps={{
                            name: 'housingSize',
                            id: 'housingSize',
                        }}
                        className="homeSize_select"
                    >
                        <option aria-label="None" value="" />
                        {housingSizes.map((homeSize, index) => (
                            <option key={index} value={index}>{homeSize}</option>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Typography variant="h2" className="HousingType__title">{t("Client.Logement.title3")}</Typography>

            <Box className="StudioServices__choice-form">
                <Counter name="kitchen" title={t("Client.Logement.housingSpecificity_1")} iconSrc="images/icon_kitchen.svg" />
                <Counter name="salon" title={t("Client.Logement.housingSpecificity_2")} iconSrc="images/icon_sofa.svg" />
                <Counter name="dining_room" title={t("Client.Logement.housingSpecificity_3")} iconSrc="images/icon_hotel.svg" />
                <Counter name="bedroom" title={t("Client.Logement.housingSpecificity_4")} iconSrc="images/icon_moon.svg" description={t("Client.Logement.housingSpecificity_4_desc")}/>
                <Counter name="bathroom" title={t("Client.Logement.housingSpecificity_5")} iconSrc="images/icon_washbasin.svg" />
                <Counter name="shower" title={t("Client.Logement.housingSpecificity_6")} iconSrc="images/icon_shower.svg" />
                <Counter name="bathtub" title={t("Client.Logement.housingSpecificity_7")} iconSrc="images/icon_bathtub.svg" />
                <Counter name="washbasin" title={t("Client.Logement.housingSpecificity_8")} iconSrc="images/icon_water.svg" />
                <Counter name="floor" title={t("Client.Logement.housingSpecificity_9")} iconSrc="images/icon_stares.svg" description={t("Client.Logement.housingSpecificity_9_desc")}/>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="dog">
                        <img
                            src={"images/icon_animal.svg"}
                            alt="dogs"
                        />
                        {t("Client.Logement.housingSpecificity_10")}
                    </InputLabel>

                    <Select
                        value={animals.dog}
                        onChange={handleAnimalsChange}
                        inputProps={{
                            name: 'dog',
                            id: 'dog',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={true}>Oui</option>
                        <option value={false}>Non</option>
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
                        value={animals.cat}
                        onChange={handleAnimalsChange}
                        inputProps={{
                            name: 'cat',
                            id: 'cat',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={true}>Oui</option>
                        <option value={false}>Non</option>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="other">
                        <img
                            src={"images/icon_animal.svg"}
                            alt="cats"
                        />
                        {t("Client.Logement.housingSpecificity_12")}
                    </InputLabel>

                    <Select
                        value={animals.other}
                        onChange={handleAnimalsChange}
                        inputProps={{
                            name: 'other',
                            id: 'other',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={true}>Oui</option>
                        <option value={false}>Non</option>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
};

export default withTranslation()(CondoServices);
