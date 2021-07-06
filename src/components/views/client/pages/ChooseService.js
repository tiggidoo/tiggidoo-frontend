
import '../scss/app.scss';

import { withTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import Footer from '../../../layout/client/FooterServ';
import HeaderServ from '../../../layout/client/HeaderServ';

import HousingBenefitMenu from '../sections/chooseService/HousingBenefitMenu';
import Validation from '../sections/chooseService/Validation';

function ChooseService({ t }) {
    const location = useLocation();

    return (
        <>
            <HeaderServ />
            {(location.pathname === '/housing' || location.pathname === '/benefit') &&
                <HousingBenefitMenu />
            }

            {location.pathname === '/validation' &&
                <Validation />
            }
            <Footer />
        </>
    )
};

export default withTranslation()(ChooseService);
