import usePostCode from '../functions/usePostCode'
import validate from '../functions/validateInfo'

import { withTranslation } from "react-i18next";

const PostCodeCl = ({ t }) => {
    const { handleChange, values, handleSubmit, errors } = usePostCode(validate)

    return (
        <div className="post_code__container">
            <form action="" onSubmit={handleSubmit}> 
                <p className="mb-5">{t("Client.Hero.text3")} </p>

                <div className="post_code__input_container">
                    <input id="postCode" type='text' name="postCode" placeholder={t("Client.Hero.postCodeLabel")} value={values.postCode} onChange={handleChange}></input>
                    {errors.postCode && <p className='error'>{errors.postCode}</p>}

                    <input type='submit' value={t("Client.Hero.postCodeBtn")} className='btn_green_bg'></input>
                </div>
                
                <div className="post_code__login_container">
                    {t("Client.Hero.postCodeText1")} &nbsp;	
                    <a href="/login">{t("Client.Hero.postCodeText2")}</a> &nbsp;	
                    {t("Client.Hero.postCodeText3")}
                </div>
            </form>
        </div>
    )
}

export default withTranslation()(PostCodeCl)
