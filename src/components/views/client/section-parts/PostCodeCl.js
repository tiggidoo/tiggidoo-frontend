import { Link } from 'react-router-dom'

import { withTranslation } from "react-i18next";
import InputPostCode from './InputPostCode';

const PostCodeCl = ({ t }) => {

    return (
        <div className="post_code__container">
            <p className="post_code__title mb-5">{t("Client.Hero.text3")} </p>

            <InputPostCode />

            <div className="post_code__login_container">
                {t("Client.Hero.postCodeText1")} &nbsp;
                <Link to="/login">{t("Client.Hero.postCodeText2")}</Link>
                &nbsp;
                {t("Client.Hero.postCodeText3")}
            </div>
        </div>
    )
}

export default withTranslation()(PostCodeCl)
