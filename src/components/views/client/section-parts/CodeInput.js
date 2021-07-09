import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';

const CodeInput = ({ t }) => {

    return (
        <div className="">
            <form noValidate autoComplete="off">
                <TextField id="sms-code"/>
                <p>{t("Client.Sms_validation.text2")}</p>
            </form>
        </div>
    );
};

export default withTranslation()(CodeInput);
