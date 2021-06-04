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
            <Typography variant="h2" className="HousingType__title">{t("Client.Logement.title2")}</Typography>
            <Box className="ComboServices__size">
                <FormControl className={classes.formControl}>
                    <Select
                        value={state.homeSize}
                        onChange={handleChange}
                        inputProps={{
                            name: 'homeSize',
                            id: 'homeSize',
                        }}
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
                <Counter title ={t("Client.Logement.housingSpecificity_1")}/>
                <Counter title ={t("Client.Logement.housingSpecificity_2")}/>
                <Counter title ={t("Client.Logement.housingSpecificity_3")}/>
                <Counter title ={t("Client.Logement.housingSpecificity_4")}/>
                <Counter title ={t("Client.Logement.housingSpecificity_5")}/>
                <Counter title ={t("Client.Logement.housingSpecificity_6")}/>
                <Counter title ={t("Client.Logement.housingSpecificity_7")}/>
                <Counter title ={t("Client.Logement.housingSpecificity_8")}/>
                <Counter title ={t("Client.Logement.housingSpecificity_9")}/>
                <Counter title ={t("Client.Logement.housingSpecificity_10")}/>

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
                    <InputLabel htmlFor="other">{t("Client.Logement.housingSpecificity_12")}</InputLabel>

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
