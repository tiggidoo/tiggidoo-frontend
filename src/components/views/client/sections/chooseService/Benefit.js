import { withTranslation } from "react-i18next"
import { useState } from 'react'

import { Typography, Box, BottomNavigationAction, BottomNavigation } from '@material-ui/core'
import OptionsCard from "../../section-parts/OptionsCard";


const Benefit = ({ t }) => {
    const [value, setValue] = useState(0);

    return (
        <Box className="HousingType">
            <Typography variant="h3" className="HousingType__title">{t("Client.Benefit.title1")}</Typography>

            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(value)
                }}
                
                showLabels
                className="active beneift__freq"
            >
                <BottomNavigationAction className="beneift__button" label={t("Client.Benefit.section1_title1")} />

                <BottomNavigationAction className="beneift__button" label={t("Client.Benefit.section1_title2")} />

                <BottomNavigationAction className="beneift__button" label={t("Client.Benefit.section1_title3")} />

            </BottomNavigation>
            <span className={`beneift__button-subtitle ${value === 0 ? "active" : ""}`}> {t("Client.Benefit.section1_subtitle1")}  </span>
            <span className={`beneift__button-subtitle ${value === 1 ? "active" : ""}`}> {t("Client.Benefit.section1_subtitle2")}  </span>
            <span className={`beneift__button-subtitle ${value === 2 ? "active" : ""}`}> {t("Client.Benefit.section1_subtitle3")}  </span>

            <Box className="mt-5">
                <Typography variant="h3" className="HousingType__title">{t("Client.Benefit.title2")}</Typography>

                <p>{t("Client.Benefit.section2_desc")}</p>

                <div className="options_list">
                    <OptionsCard hasCounter="true" />
                    <OptionsCard title={t("Client.Benefit.section2_option6")} iconSrc="images/icon_spray.svg" description={t("Client.Benefit.section2_option6_desc")} />
                </div>
                

            </Box>

            <Box className="mt-5">
                <Typography variant="h3" className="HousingType__title">{t("Client.Benefit.title3")}</Typography>
            </Box>


        </Box>
    )
}

export default withTranslation()(Benefit)
