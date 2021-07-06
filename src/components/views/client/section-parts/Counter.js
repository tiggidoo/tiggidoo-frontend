import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

import { useDispatch, useStore } from 'react-redux';
import { estimationHousingUpdate, fetchEstimation } from '../../../../store/actions/estimationAction';

const Counter = ({ description, iconSrc, name, title }) => {
    const dispatch = useDispatch();
    const store = useStore();

    const [count, setCount] = useState(0);

    const updateStore = (newCount) => {
        let requestBody = {
            ...store.getState().estimation.settings,
            housingSpecificity: { ...store.getState().estimation.settings.housingSpecificity, [name]: newCount },
        };

        estimationHousingUpdate(requestBody)(dispatch);
        fetchEstimation(requestBody)(dispatch);
    };

    const handleCounterLessClick = () => {
        const newCount = count > 0 ? count - 1 : 0;

        setCount(newCount);
        updateStore(newCount);
    };

    const handleCounterMoreClick = () => {
        const newCount = count + 1;

        setCount(newCount);
        updateStore(newCount);
    };

    return (
        <div className="counter_container">
            <div className="counter_header">
                <img src={iconSrc} alt={title} />
                <h6>{title}</h6>
            </div>

            <div className="counter">
                <button className="btn_blue_bg" onClick={handleCounterLessClick}>
                    -
                </button>

                <p>{count}</p>

                <button className="btn_blue_bg" onClick={handleCounterMoreClick}>
                    +
                </button>
            </div>

            <p className="counter_description">{description}</p>
        </div>
    );
};

export default withTranslation()(Counter);
