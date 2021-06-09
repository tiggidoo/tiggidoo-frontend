import { withTranslation } from "react-i18next"

const Demande = ({ t }) => {
    return (
        <div className="demande__housing_specification">
            <h2>{t("Client.sideBar.demande")}</h2>
            <h4>{t("Client.sideBar.housing")}</h4>
        </div>
    )
};

export default withTranslation()(Demande)
