
import "../scss/app.scss";

import { withTranslation } from "react-i18next"
import { useHistory, useLocation } from "react-router-dom";

import Footer from "../../../layout/client/FooterServ";
import HeaderServ from "../../../layout/client/HeaderServ";
import HousingType from "../sections/chooseService/HousingType";
import { Col, Row } from "react-bootstrap";
import { Link } from "@material-ui/core";
import Button from '@material-ui/core/Button';

import Demande from "../section-parts/Demande";
import Balance from "../section-parts/Balance";
import Benefit from "../sections/chooseService/Benefit";
import Validation from "../sections/chooseService/Validation";


function ChooseService({ t }) {
    const history = useHistory()
    const location = useLocation()

    const routeChange = () => {
        let path = ``

        if (location.pathname === '/housing') path = `benefit`

        if (location.pathname === '/benefit') path = `validation`

        history.push(path)
    }

    const goback = (e) => {
        e.preventDefault()
        history.goBack()
    }

    return (
        <>
            <HeaderServ />
            <Row className="choose_service">
                <Col xl={9} lg={12} md={12} sm={12}>
                    {location.pathname === '/housing' &&
                        <HousingType />
                    }

                    {location.pathname === '/benefit' &&
                        <Benefit />
                    }

                    {location.pathname === '/validation' &&
                        <Validation />
                    }
                </Col>

                <Col xl={3} lg={12} md={12} sm={12}>
                    <div className="sidebar">
                        <Demande />
                        <Balance />

                        <Button variant="contained" className="sidebar__submit" onClick={routeChange}>
                            {t("Client.sideBar.demande_submit")}
                        </Button>
                    </div>
                </Col>
            </Row>

            <div className="services_footer">
                <Link href="#" className="services_backlink" onClick={goback}>
                    {t("Client.Logement.back")}
                </Link>
                <p>{t("Client.Logement.footer_text")} <a href="http://">{t("Client.Logement.footer_link")}</a></p>
            </div>

            <Footer />
        </>
    )
}

export default withTranslation()(ChooseService)
