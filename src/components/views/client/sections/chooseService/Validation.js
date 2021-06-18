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



const Validation = ({ t }) => {
    const [value, setValue] = useState(0);

    return (
        <Box className="HousingType">
            
            <p>{t("Client.Validation.intro")}</p>
            
        </Box>
    )
}

export default withTranslation()(Validation)
