
import '../scss/app.scss';

import { withTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import { useStore } from 'react-redux';

import Footer from '../../../layout/client/FooterServ';
import HeaderServ from '../../../layout/client/HeaderServ';


import { Typography, Box } from '@material-ui/core';
import SmsIcon from '@material-ui/icons/Sms';

import CodeInput from '../section-parts/CodeInput';

function SmsValidation({ t }) {
    const history = useHistory();
    const location = useLocation();
    const store = useStore();

    if (location.pathname === '/sms_validation' && !store.getState().estimation.settings.telephone) {
        history.push('validation');
        return <></>;
    }

    const handleResendSmsClick = () => {
        fetch('https://www.api-tiggidoo.com/api/twilio/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ telephone: store.getState().estimation.settings.telephone }),
        });
    };

    const displayPhoneNumber = () => {
        const phone = store.getState().estimation.settings.telephone;

        return `${phone[0]}${phone[1]} (${phone[2]}${phone[3]}${phone[4]})-${phone[5]}${phone[6]}${phone[7]} ${phone[8]}${phone[9]}${phone[10]}${phone[11]}`;
    };

    return (
        <div>
            <HeaderServ />

            <Box className="sms_validation">
                <Typography variant="h2">{t("Client.Sms_validation.title")}</Typography>

                <Typography variant="h3">{t("Client.Sms_validation.phone")}<span>{displayPhoneNumber()}</span></Typography>

                <p>{t("Client.Sms_validation.text1")}</p>

                <CodeInput />

                <p>{t("Client.Sms_validation.text3")}</p>

                <p className="blue_text" onClick={handleResendSmsClick}><SmsIcon color="disabled" />{t("Client.Sms_validation.text4")}</p>
            </Box>

            <Row className="localisation_footer">
                <p>{t("Client.Location.footer")}<a href="#" className="link">{t("Client.Location.footer_link")}</a></p>
            </Row>

            <Footer />
        </div>
    );
};

export default withTranslation()(SmsValidation);
