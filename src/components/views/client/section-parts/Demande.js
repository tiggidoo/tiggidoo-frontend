import { withTranslation } from "react-i18next"

import { useStore } from 'react-redux';

const Demande = ({ t }) => {
    const store = useStore();

    const displaySpecificities = () => {
        const specificities = store.getState().estimation.settings.housingSpecificity;

        let elements = [];

        for (const specificity in specificities) {
            elements.push(<li key={specificity}>{specificities[specificity]} {t(`Client.Logement.housingSpecificity_${specificity}`)}</li>);
        }

        return elements;
    };

    const displayFormula = () => {
        const houseworkFrequencyId = store.getState().estimation.settings.houseworkFrequencyId;
        const startDate = store.getState().estimation.settings.startDate;

        let elements = [];

        elements.push(<li key="1">{t(`Client.Validation.frequency_selected_${houseworkFrequencyId}`)}</li>);

        elements.push(<li key="3">{t('Client.Time.a-partir-du', { date: startDate })}</li>);

        return elements;
    };

    const displayOptions = () => {
        const options = store.getState().estimation.settings.houseworkPersonalization;

        let elements = [];

        for (const option in options) {
            if (typeof options[option] === 'number') {
                elements.push(<li key={option}>{options[option]} {t(`Client.Benefit.houseworkPersonalization_${option}`)}</li>);
            } else {
                elements.push(<li key={option}>{t(`Client.Benefit.houseworkPersonalization_${option}`)}</li>);
            }
        }

        return elements;
    };

    return (
        <div className="demande__housing_specification">
            <h2>{t("Client.sideBar.demande")}</h2>

            <h4>{t("Client.sideBar.housing")}</h4>
            <h4>{t("Client.sideBar.housing")}</h4>

            <ul className="recap_list">
                {displaySpecificities()}
            </ul>

            <h4>{t("Client.Validation.bloc1_texte3")}</h4>

            <ul className="recap_list">
                {displayFormula()}
            </ul>

            <h4>{t("Client.Validation.bloc1_texte4")}</h4>

            <ul className="recap_list">
                {displayOptions()}
            </ul>
        </div>
    )
};

export default withTranslation()(Demande)
