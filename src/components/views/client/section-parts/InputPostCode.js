import { withTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';

import Form from "../form/Form";

const InputPostCode = ({ t, ClassColor }) => {
    const { errors, values, handleChange, handleSubmit } = Form({
        initValues: { postCode: '' },
        validator: (values) => {
            let errors = {};

            if (!values.postCode.trim()) {
                errors.postCode = 'Post code is required';
            }

            return errors;
        },
        onSubmit: ({ values, setErrors }) => {
            // TODO: Send the postal code to know if this area is served

            // Redirect to Housing
        },
    });

    return (
        <form action="" onSubmit={handleSubmit}>
            <Box className="post_code__input_container">
                <input id="postCode" type='text' name="postCode" placeholder={t("Client.Hero.postCodeLabel")} value={values.postCode} onChange={handleChange}></input>
                <input type='submit' value={t("Client.Hero.postCodeBtn")} className={ClassColor} ></input>
            </Box>
            { errors.postCode && <p className='error'>{errors.postCode}</p>}
        </form>
    )
}

InputPostCode.defaultProps = {
    ClassColor: 'btn_green_bg',
}

InputPostCode.propTypes = {
    ClassColor: PropTypes.string,
};

export default withTranslation()(InputPostCode);
