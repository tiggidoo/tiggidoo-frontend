import React, { useState } from 'react';
import { withTranslation } from "react-i18next"

import PropTypes from 'prop-types'

const Counter = ({ title, iconSrc, description }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter_container">
            <div className="counter_header">
                <img src={iconSrc} alt="cats" />
                <h6> {title} </h6>
            </div>

            <div className="counter">
                <button className="btn_blue_bg" onClick={() => setCount(count - 1)}>
                    -
                </button>
                <p>{count}</p>
                <button className="btn_blue_bg" onClick={() => setCount(count + 1)}>
                    +
                </button>
            </div>
            <p className="counter_description"> {description} </p>
        </div>
    );
}

Counter.defaultProps = {
    title: "Cuisine",
    description: ""
}

Counter.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    iconSrc: PropTypes.string,
}

export default withTranslation()(Counter);