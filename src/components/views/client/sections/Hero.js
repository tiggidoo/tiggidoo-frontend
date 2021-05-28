/*  
    This is the Hero section of Client Home page. 
*/

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import PostCodeCl from "../section-parts/PostCodeCl";

function Hero({ t }) {
    return (
        <section className="ClHero">
        <Container>
            <Row>
            

            <Col md={12} lg={6}>
                <div className="ClHero__box d-flex flex-column h-100 mt-5">
                    <h1 className="ClHero__title pb-xl-5">
                        {t("Client.Hero.title1")}

                        <span>{t("Client.Hero.title2")}</span>
                    </h1>

                    <div className="ClHero_paragraph">
                        <p className="ClHero__text mb-4 pb-xl-4">
                            <span>TIGGID</span><span className="green_text">Oo</span>&nbsp;
                            {t("Client.Hero.text1")}
                        </p>

                        <p className="ClHero__text mb-4 pb-xl-4">
                            {t("Client.Hero.text2")}
                        </p>
                    </div>
                </div>
            </Col>
        
            <Col md={12} lg={6}>
                <div className="ClHero__box d-flex flex-column h-100 mt-5">
                    <img
                        src={"../images/cl_home_hero_asset.svg"}
                        alt=""
                        className="ClHero__img d-md-block"
                    />
                </div>
            </Col>

            <Col md={12} lg={7}>
                <PostCodeCl/>
            </Col>

            </Row>
        </Container>
        </section>
    );
}

export default withTranslation()(Hero);
