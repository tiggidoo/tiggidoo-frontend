import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { useDispatch, useStore } from 'react-redux';
import { estimationLocationUpdate } from '../../../../store/actions/estimationAction';

import { Box } from '@material-ui/core';

import Form from '../form/Form';

const InputPostCode = ({ t, ClassColor }) => {
    const store = useStore();
    const dispatch = useDispatch();
    const history = useHistory();

    const { errors, values, handleChange, handleSubmit } = Form({
        initValues: { postCode: '' },
        validator: (values) => {
            let errors = {};

            const postCode = values.postCode.trim().replace(/[^0-9A-Z]/g, '');

            if (!postCode || postCode === '') errors.postCode = t("Client.Error.postcode_required");
            if (postCode && postCode !== '' && !(new RegExp(/^([A-Z]{1})([0-9]{1})([A-Z]{1})([0-9]{1})([A-Z]{1})([0-9]{1})$/, 'g')).test(postCode)) errors.postCode = t("Client.Error.postcode_invalid_format");

            return errors;
        },
        onSubmit: ({ values, setErrors }) => {
            // TODO: Make request to validate post code

            const requestBody = {
                ...store.getState().estimation.settings,
                address: {
                    city: 'Montreal',
                    province: 'QC',
                    country: 'Canada',
                    postcode: values.postCode,
                    lat: '32.231245',
                    lng: '12.562348',
                },
            };

            estimationLocationUpdate(requestBody)(dispatch);

            history.push('housing');
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
    );
};

InputPostCode.defaultProps = {
    ClassColor: 'btn_green_bg',
};

InputPostCode.propTypes = {
    ClassColor: PropTypes.string,
};

export default withTranslation()(InputPostCode);
