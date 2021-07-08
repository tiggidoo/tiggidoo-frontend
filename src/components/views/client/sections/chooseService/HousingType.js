import { withTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { useDispatch, useStore } from 'react-redux';
import { estimationHousingUpdate, fetchEstimation } from '../../../../../store/actions/estimationAction';

import { Typography, Box, BottomNavigationAction, BottomNavigation } from '@material-ui/core';

import { StudioIcon } from '../../section-parts/icons/StudioIcon';
import { CondoIcon } from '../../section-parts/icons/CondoIcon';
import { AppartmentIcon } from '../../section-parts/icons/AppartmentIcon';
import { LoftIcon } from '../../section-parts/icons/LoftIcon';

import StudioServices from '../../section-parts/StudioServices';
import CondoServices from '../../section-parts/CondoServices';
import ApartmentServices from '../../section-parts/ApartmentServices';
import LoftServices from '../../section-parts/LoftServices';

const HousingType = ({ t }) => {
    const dispatch = useDispatch();
    const store = useStore();
    const [housing, setHousing] = useState(store.getState().estimation.settings.housingCategoryId - 1);

    useEffect(() => {
        const requestBody = { ...store.getState().estimation.settings };

        estimationHousingUpdate(requestBody)(dispatch);
        fetchEstimation(requestBody)(dispatch);
    }, []);

    const handleHousingChange = (event, value) => {
        let requestBody = { ...store.getState().estimation.settings, housingCategoryId: value + 1 };

        if (value === 0) requestBody = { ...requestBody, housingSpecificity: null };
        if (value === 0 || value === 2) requestBody = { ...requestBody, housingSizeId: null };
        if ((value === 1 || value === 3) && !requestBody.housingSizeId) requestBody = { ...requestBody, housingSizeId: 1 };

        if (value !== 0 && !requestBody.housingSpecificity) {
            requestBody = {
                ...requestBody,
                housingSpecificity: {
                    floor: 0,
                    bedroom: 0,
                    bathroom: 0,
                    washbasin: 0,
                    kitchen: 0,
                    salon: 0,
                    dining_room: 0,
                    shower: 0,
                    bathtub: 0,
                },
            };
        }

        estimationHousingUpdate(requestBody)(dispatch);
        fetchEstimation(requestBody)(dispatch);
        setHousing(value);
    };

    return (
        <Box className="HousingType">
            <Typography variant="h3" className="HousingType__title">{t("Client.Logement.title1")}</Typography>

            <BottomNavigation
                value={housing}
                onChange={handleHousingChange}
                showLabels
                className="active HousingType__navigation"
            >
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType_studio")} icon={<StudioIcon />} />
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType_condo")} icon={<CondoIcon />} />
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType_appartement")} icon={<AppartmentIcon />} />
                <BottomNavigationAction className="HousingType__button" label={t("Client.Logement.housingType_loft")} icon={<LoftIcon />} />
            </BottomNavigation>

            {housing === 0 && <StudioServices />}
            {housing === 1 && <CondoServices />}
            {housing === 2 && <ApartmentServices />}
            {housing === 3 && <LoftServices />}
        </Box>
    );
};

export default withTranslation()(HousingType);
