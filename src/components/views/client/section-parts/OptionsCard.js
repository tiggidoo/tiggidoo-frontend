import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

import { useDispatch, useStore } from 'react-redux';
import { estimationBenefitUpdate, fetchEstimation } from '../../../../store/actions/estimationAction';

const OptionsCard = ({ description, hasCounter, iconSrc, name, title }) => {
    const store = useStore();
    const dispatch = useDispatch();

    const [count, setCount] = useState(store.getState().estimation.settings.houseworkPersonalization[name]);
    const [isActiveCard, setIsActiveCard] = useState(!!store.getState().estimation.settings.houseworkPersonalization[name]);

    const updateStore = (value) => {
        let requestBody = {
            ...store.getState().estimation.settings,
            houseworkPersonalization: { ...store.getState().estimation.settings.houseworkPersonalization, [name]: value },
        };

        estimationBenefitUpdate(requestBody)(dispatch);
        fetchEstimation(requestBody)(dispatch);
    };

    const handleCounterLessClick = () => {
        if (count === 0) return;

        const newCount = count > 0 ? count - 1 : 0;

        setCount(newCount);
        setIsActiveCard(newCount !== 0);
        updateStore(newCount);
    };

    const handleCounterMoreClick = () => {
        const newCount = count + 1;

        setCount(newCount);
        setIsActiveCard(true);
        updateStore(newCount);
    };

    const handleCardClick = () => {
        setIsActiveCard(!isActiveCard);
        updateStore(!isActiveCard);
    };

    return (
        <div className={ isActiveCard ? 'options_card active' : 'options_card' } onClick={!hasCounter ? handleCardClick : null}>
            <div className="options_card__header">
                <img src={iconSrc} alt={name} />
                <h6>{title}</h6>
            
                {hasCounter &&
                    <div className="counter">
                        <button className="counter_btn" onClick={handleCounterLessClick}>
                            -
                        </button>
                        <p>{count}</p>
                        <button className="counter_btn" onClick={handleCounterMoreClick}>
                            +
                        </button>
                    </div>
                }
            </div>

            <div className="options_card__desc">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default withTranslation()(OptionsCard);
