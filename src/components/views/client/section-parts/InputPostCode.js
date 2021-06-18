import usePostCode from '../functions/usePostCode'
import validate from '../functions/validateInfo'

import { withTranslation } from "react-i18next"
import PropTypes from 'prop-types'

import { Box } from '@material-ui/core'


const InputPostCode = ({ t, ClassColor }) => {
    const { handleChange, values, handleSubmit, errors } = usePostCode(validate)

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
}

export default withTranslation()(InputPostCode)
