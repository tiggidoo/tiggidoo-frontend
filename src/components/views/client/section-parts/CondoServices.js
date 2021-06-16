import { withTranslation, useTranslation } from "react-i18next"
import { useState, useEffect } from 'react'
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
         
      '@media (max-width:599px)': { 
        minWidth: "97px",
      }
    },
}));

const CondoServices = ({ t }) => {
    const classes = useStyles()

    // Get language 
    const { i18n } = useTranslation();
    const lang = i18n.language;

    const [state, setState] = useState({
        dog: '',
        name: 'hai',
    });

    // Handle select box change
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const [sizes, setHomeSizes] = useState([])

    useEffect(() => {
        const getHomeSizes = async () => {
            const sizesFromServer = await fetchHomeSizes()
            setHomeSizes(sizesFromServer.sizes)
        }

        getHomeSizes()

    }, [])

    // Fetch home sizes
    const fetchHomeSizes = async () => {
        const res = await fetch(`https://www.api-tiggidoo.com/api/housingSizeList/${lang}`)
        const data = await res.json()

        return data
    }

    // Convert home sizes to array
    const homeSizeArray = []
    for (const [key, value] of Object.entries(sizes)) {
        homeSizeArray[key] = value
    }

    return (
        <Box className="StudioServices__choice-container">
            <Typography variant="h3" className="HousingType__title">{t("Client.Logement.title2")}</Typography>
            <Box className="ComboServices__size">
                <FormControl className={classes.formControl}>
                    <Select
                        value={state.homeSize}
                        onChange={handleChange}
                        inputProps={{
                            name: 'homeSize',
                            id: 'homeSize',
                        }}
                        className="homeSize_select"
                    >
                        <option aria-label="None" value="" />

                        {homeSizeArray.map((homeSize, index) => (
                            <option value={index}>{homeSize} </option>
                        ))}

                    </Select>

                </FormControl>
            </Box>

            <Typography variant="h2" className="HousingType__title">{t("Client.Logement.title3")}</Typography>

            <Box className="StudioServices__choice-form">
                <Counter title={t("Client.Logement.housingSpecificity_1")} iconSrc="images/icon_kitchen.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_2")} iconSrc="images/icon_sofa.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_3")} iconSrc="images/icon_hotel.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_4")} iconSrc="images/icon_moon.svg" description={t("Client.Logement.housingSpecificity_4_desc")}/>
                <Counter title={t("Client.Logement.housingSpecificity_5")} iconSrc="images/icon_washbasin.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_6")} iconSrc="images/icon_shower.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_7")} iconSrc="images/icon_bathtub.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_8")} iconSrc="images/icon_water.svg" />
                <Counter title={t("Client.Logement.housingSpecificity_9")} iconSrc="images/icon_stares.svg" description={t("Client.Logement.housingSpecificity_9_desc")}/>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="dog">
                        <img
                            src={"images/icon_animal.svg"}
                            alt="dogs"
                        />
                        {t("Client.Logement.housingSpecificity_10")}
                    </InputLabel>

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
                        value={state.dog}
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
                            alt="cats"
                        />
                        {t("Client.Logement.housingSpecificity_12")}
                    </InputLabel>

                    <Select
                        value={state.dog}
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

export default withTranslation()(CondoServices)
