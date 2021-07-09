import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { useStore } from 'react-redux';

import TextField from '@material-ui/core/TextField';

const CodeInput = ({ t }) => {
    const history = useHistory();
    const store = useStore();

    const [sms, setSms] = useState('');

    const handleSmsChange = (event) => {
        const value = event.target.value;
        const newValue = value.split('').filter((element) => Number.isInteger(parseInt(element))).join('');

        setSms(newValue);

        if (newValue.length === 6) submit(newValue);
    };

    const submit = (sms) => {
        const requestBody = { ...store.getState().estimation.settings, sms };

        fetch('https://www.api-tiggidoo.com/api/register/client', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) console.log(data.error);
                else history.push('thankyou');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="sms_code__wrapper">
            <form noValidate autoComplete="off">
                <TextField
                    id="sms-code"
                    name="sms"
                    inputProps={{ maxLength: 6 }}
                    onChange={handleSmsChange}
                    value={sms}
                />
                <p className="sms_code__subtext">{t("Client.Sms_validation.text2")}</p>
            </form>
        </div>
    );
};

export default withTranslation()(CodeInput);
