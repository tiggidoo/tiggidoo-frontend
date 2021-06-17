import React, { useState } from 'react';
import { withTranslation } from "react-i18next"

const OptionsCard = ({ title, iconSrc, description, hasCounter, onClick }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="options_card" onClick={onClick}>
            <div className="options_card__header">
                <img src={iconSrc} alt="option" />
                <h6> {title} </h6>
            
            {hasCounter &&
                <div className="counter">
                    <button className="counter_btn" onClick={() => setCount(count + 1)}>
                        +
                    </button>
                    <p>{count}</p>
                    <button className="counter_btn" onClick={() => setCount(count - 1)}>
                        -
                    </button>
                </div>
            }
            </div>
            <div className="options_card__desc">
                <p>{description}</p>
            </div>
        </div>
    );
}

OptionsCard.defaultProps = {
    title: "Four",
    iconSrc: "images/icon_oven.svg",
    description: "Nettoyage complet si un produit décapent est mis à disposition",
    hasCounter: false
}
export default withTranslation()(OptionsCard);