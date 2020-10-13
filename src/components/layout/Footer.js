import React from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import "../../css/components/layout/footer.scss";

function Footer({ t }) {
  return (
    <footer className="Footer p-4">
      <Container className="container py-5 my-5">
        <div className="Footer__box d-md-flex justify-content-md-between">
          {/* Footer__section1 mb-5 mt-5 mr-lg-auto p-2 */}
          <div className="Footer__section1 mb-5 mt-5">
            <img
              src={"images/plante.svg"}
              alt=""
              className="Footer__plant1 d-none d-md-block"
            />
            <img
              src={"images/logo_tiggidoo_white.svg"}
              alt=""
              className="Footer__section1__logo d-md-none"
            />
          </div>

          <div className="d-none d-xl-flex flex-column justify-content-between mx-xl-5">
            <img
              src={"images/tiggidoo_man.png"}
              alt=""
              className="tiggidoo_white"
            />
            <div className="Footer__copiRight">
              <span>Copiright 2020 {t("Footer.copyRight")}</span>
            </div>
          </div>

          <div className="Footer__section2 mb-5 d-md-flex m-md-0">
            <div className="Footer__section2__list1 mb-5 mb-md-0 mx-md-3 mx-lg-5">
              <h3 className="mb-4">{t("Footer.ul1.title")} </h3>
              <ul>
                <li>{t("Footer.ul1.li.text1")}</li>
                <li>{t("Footer.ul1.li.text2")}</li>
                <li>{t("Footer.ul1.li.text3")}</li>
                <li>{t("Footer.ul1.li.text4")}</li>
              </ul>
            </div>

            <div className="Footer__section2__list2 mb-5 mx-md-3  mx-lg-5">
              <h3 className="mb-4">{t("Footer.ul2.title")} </h3>
              <ul>
                <li>{t("Footer.ul2.li.text1")}</li>
                <li>{t("Footer.ul2.li.text2")}</li>
                <li>{t("Footer.ul2.li.text3")}</li>
              </ul>
            </div>
          </div>

          <div className="Footer__section3 mb-5 d-md-flex mx-md-3 my-md-0">
            <div className="Footer__section3__SN">
              <div className="Footer__section3_SN_Title">
                <h3>{t("Footer.titleIcons")}</h3>
              </div>
              <div className="Footer__section3__SN__Icons">
                <FacebookIcon />
                <LinkedInIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>

          <div className="Footer__plant2">
            <img src={"images/Plante2.svg"} alt="" />
          </div>
        </div>
        <div className="Footer__copiRight d-xl-none">
          <span>Copiright 2020 {t("Footer.copyRight")}</span>
        </div>
      </Container>
    </footer>
  );
}

export default withTranslation()(Footer);
