import { Link } from 'react-router-dom'

import { withTranslation } from "react-i18next"
import InputPostCode from './InputPostCode'

import { Box } from '@material-ui/core'


const PostCodeCl = ({ t }) => {

    return (
        <Box className="post_code__container">
            <p className="post_code__title mb-5">{t("Client.Hero.text3")} </p>

            <InputPostCode />

            <Box className="post_code__login_container">
                {t("Client.Hero.postCodeText1")} &nbsp;

                <Box component="span" className="post_code__link_container">
                    <Link className="post_code__link" to="/login">{t("Client.Hero.postCodeText2")}</Link>
                    &nbsp;
                    {t("Client.Hero.postCodeText3")}
                </Box>
            </Box>
        </Box>
    )
}

export default withTranslation()(PostCodeCl)
