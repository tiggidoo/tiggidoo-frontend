import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';

const CodeInput = ({ t }) => {

    return (
        <div className="sms_code__wrapper">
            <form noValidate autoComplete="off">
                <TextField inputProps={{
                    maxlength: 6,
                }}
                    id="sms-code" />
                <p className="sms_code__subtext">{t("Client.Sms_validation.text2")}</p>
            </form>
        </div>
    );
};

export default withTranslation()(CodeInput);
