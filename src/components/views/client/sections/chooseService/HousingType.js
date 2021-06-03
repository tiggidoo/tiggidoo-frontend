import { withTranslation } from "react-i18next"
import { useState } from 'react'

import { Typography, Box, Button, BottomNavigationAction, BottomNavigation } from '@material-ui/core'
import { StudioIcon } from "../../section-parts/icons/StudioIcon"

const HousingType = ({ t }) => {
    const [value, setValue] = useState(0);
    return (
        <Box className="HousingType">
            <Typography variant="h2" className="HousingType__title">{t("Client.Logement.title1")}</Typography>

            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className="active"
            >
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType1")} icon={<StudioIcon />} />
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType2")} icon={<StudioIcon />} />
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType3")} icon={<StudioIcon />} />
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType4")} icon={<StudioIcon />} />
            </BottomNavigation>
        </Box>
    )
}

export default withTranslation()(HousingType)
