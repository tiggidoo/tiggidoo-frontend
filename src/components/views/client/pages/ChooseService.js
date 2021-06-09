
import "../scss/app.scss";

import { withTranslation } from "react-i18next"

import Footer from "../../../layout/client/FooterServ";
import HeaderServ from "../../../layout/client/HeaderServ";
import HousingType from "../sections/chooseService/HousingType";
import { Balance } from "../section-parts/Balance";

import { Col, Row } from "react-bootstrap";
import { Link } from "@material-ui/core";


function ChooseService({ t }) {
    return (
        <>
            <HeaderServ />
            <Row>
                <Col lg={8}> <HousingType /> </Col>
                <Col lg={4} className="sidebar"><Balance /></Col>
            </Row>
            <div className="services_footer">
                <Link href="#" className="services_backlink">
                    {t("Client.Logement.back")}
                </Link>
                <p>{t("Client.Logement.footer_text")} <a href="http://">{t("Client.Logement.footer_link")}</a></p> 
            </div>
            <Footer />
        </>
    )
}

export default withTranslation() (ChooseService)
