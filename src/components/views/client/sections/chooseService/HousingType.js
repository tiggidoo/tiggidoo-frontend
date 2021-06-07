import { withTranslation } from "react-i18next"
import { useState } from 'react'

import { Typography, Box, BottomNavigationAction, BottomNavigation } from '@material-ui/core'
import { StudioIcon } from "../../section-parts/icons/StudioIcon"
import { CondoIcon } from "../../section-parts/icons/CondoIcon"
import { AppartmentIcon } from "../../section-parts/icons/AppartmentIcon"
import { LoftIcon } from "../../section-parts/icons/LoftIcon"

import StudioServices from "../../section-parts/StudioServices"
import CondoServices from "../../section-parts/CondoServices"
import AppartmentServices from "../../section-parts/AppartmentServices"
import LoftServices from "../../section-parts/LoftServices"



const HousingType = ({ t }) => {
    const [value, setValue] = useState(0);

    return (
        <Box className="HousingType">
            <Typography variant="h3" className="HousingType__title">{t("Client.Logement.title1")}</Typography>

            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className="active HousingType__navigation"
            >
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType1")} icon={<StudioIcon />} />
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType2")} icon={<CondoIcon />} />
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType3")} icon={<AppartmentIcon />} />
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType4")} icon={<LoftIcon />} />
            
            </BottomNavigation>

            {value === 0 && <StudioServices />}
            {value === 1 && <CondoServices />}
            {value === 2 && <AppartmentServices />}
            {value === 3 && <LoftServices />}

           
        </Box>
    )
}

export default withTranslation()(HousingType)
