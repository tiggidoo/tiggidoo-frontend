
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


function ChooseService({ t }) {
    const history = useHistory()

    const routeChange = () => {
        let path = `benefit`
        history.push(path)
    }

    const goback = ( e ) => {
        e.preventDefault()
        history.goBack()
    }

    const location = useLocation()

    return (
        <>
            <HeaderServ />
            <Row className="choose_service">
                <Col lg={8}> 
                {location.pathname === '/housing' &&
                    <HousingType /> 
                }

                {location.pathname === '/benefit' &&
                    <p>benefit</p> 
                }
                </Col>

                <Col lg={4} >
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
