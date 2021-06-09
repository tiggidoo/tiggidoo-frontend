import React, { useState } from 'react';
import { withTranslation } from "react-i18next"

const Counter = ({ title, iconSrc }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter_container">
            <div className="counter_header">
                <img src={iconSrc} alt="cats" />
                <h6> {title} </h6>
            </div>

            <div className="counter">
                <button className="btn_blue_bg" onClick={() => setCount(count + 1)}>
                    +
                </button>
                <p>{count}</p>
                <button className="btn_blue_bg" onClick={() => setCount(count - 1)}>
                    -
                </button>
            </div>

        </div>
    );
}

Counter.defaultProps = {
    title: "hello world!",
}
export default withTranslation()(Counter);