import { withTranslation } from 'react-i18next';
import { useState } from 'react';
import { useStore } from 'react-redux';

import Button from '@material-ui/core/Button';

const Balance = ({ t }) => {
    const store = useStore();
    const [showInfo, setShowInfo] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useStore().subscribe(() => { 
        setTotalPrice(store.getState().estimation.calculation.totalPrice);
    });

    return (
        <div className="demande__balance">
            <div className="balance__title">
                <h2>{t("Client.sideBar.estimation")}</h2>
                <h4>${totalPrice}</h4>
            </div>
            
            <Button onClick={() => setShowInfo(!showInfo)} className="balance__info">
                {showInfo ? (
                   <p>{ t("Client.sideBar.close_info") }</p> 
                ):(
                    <p>{t("Client.sideBar.open_info")}</p> 
                )}
            </Button>

            {showInfo &&
                <p>
                    {t("Client.sideBar.info_text")}
                </p>
            }
        </div>
    )
};

export default withTranslation()(Balance);

