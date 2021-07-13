import { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';

import { useStore } from 'react-redux';

import { startDateToTextualDate } from '../utils/date';

const Demande = ({ t }) => {
    const store = useStore();
    const [settings, setSettings] = useState(store.getState().estimation.settings);

    useEffect(() => {
        store.subscribe(() => {
            setSettings(store.getState().estimation.settings);
        });
    }, []);

    const displaySpecificities = () => {
        const specificities = settings.housingSpecificity;

        let elements = [];

        for (const specificity in specificities) {
            if (specificities[specificity] !== 0) {
                elements.push(<li key={specificity}>{specificities[specificity]} {t(`Client.Logement.housingSpecificity_${specificity}`)}</li>);
            }
        }

        return elements;
    };

    const displayFormula = () => {
        const houseworkFrequencyId = settings.houseworkFrequencyId;
        const startDate = settings.startDate;

        let elements = [];

        elements.push(<li key="1">{t(`Client.Validation.frequency_selected_${houseworkFrequencyId}`)}</li>);
        if (startDate) elements.push(<li key="3">{t('Client.Time.from_the_with_date', { date: startDateToTextualDate(startDate) })}</li>);

        return elements;
    };

    const displayOptions = () => {
        const options = settings.houseworkPersonalization;

        let elements = [];

        for (const option in options) {
            if (typeof options[option] === 'number' && options[option] !== 0) {
                elements.push(<li key={option}>{options[option]} {t(`Client.Benefit.houseworkPersonalization_${option}`)}</li>);
            } else if (options[option] == true) {
                elements.push(<li key={option}>{t(`Client.Benefit.houseworkPersonalization_${option}`)}</li>);
            }
        }
        return elements;
    };

    return (
        <div className="demande__housing_specification">
            <h2>{t("Client.sideBar.demande")}</h2>

            <h4>{t("Client.sideBar.housing")} ({t(`Client.Logement.housingCategory_${settings.housingCategoryId}`)})</h4>

            <ul className="recap_list">
                {displaySpecificities()}
            </ul>

            {store.getState().estimation.housingSuccess && (
                <>
                    <h4>{t("Client.Validation.bloc1_texte3")}</h4>

                    <ul className="recap_list">
                        {displayFormula()}
                    </ul>
                </>
            )}

            <h4>{t("Client.Validation.bloc1_texte4")}</h4>

            <ul className="recap_list">
                {displayOptions()}
            </ul>
        </div>
    );
};

export default withTranslation()(Demande);
