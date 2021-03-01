import React from "react";
import { Container } from "react-bootstrap";
//import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import "./css/footer.scss";

function Footer({ t }) {
  return (
    <footer className="Footer">
      <Container>
      <div className="pt-xl-5">
        <div className="Footer__box d-md-flex justify-content-md-between pt-xl-5 pb-xl-4">
          {/* Footer__section1 mb-5 mt-5 mr-lg-auto p-2 */}
          <div className="Footer__section1 mb-5 mt-5 mb-xl-0">
            <img
              src={"images/plante-1.svg"}
              alt=""
              className="Footer__plant1 d-none d-md-block"
            />
            <img
              src={"images/logo_tiggidoo_white.svg"}
              alt=""
              className="Footer__section1__logo d-md-none"
            />
          </div>

          <div className="Footer__copiRightDeskop d-none d-xl-flex flex-column justify-content-between mx-xl-5 ">
            <img
              src={"images/logo-footer.svg"}
              alt=""
              className="tiggidoo_white"
            />
            <div className="Footer__copiRightDeskop__text">
              <span>{t("Footer.copyRight")}</span>
            </div>
          </div>

          <div className="Footer__section2 mb-5 d-md-flex m-md-0">
            <div className="Footer__section2__list1 mb-5 mb-md-0 mx-md-3 mx-lg-5">
              <h3 className="mb-4 mb-xl-5">{t("Footer.ul1.title")} </h3>
              <ul>
                <li className="mb-4 mb-xl-5">{t("Footer.ul1.li.text1")}</li>
                {/* <li className="mb-4 mb-xl-5">{t("Footer.ul1.li.text2")}</li> */}
                <li className="mb-4 mb-xl-5">{t("Footer.ul1.li.text3")}</li>
                <li className="mb-4 mb-xl-5">{t("Footer.ul1.li.text4")}</li>
              </ul>
            </div>

            <div className="Footer__section2__list2 mb-5 mx-md-3  mx-lg-5">
              <h3 className="mb-4 mb-xl-5">{t("Footer.ul2.title")} </h3>
              <ul>
                <li className="mb-4 mb-xl-5">{t("Footer.ul2.li.text1")}</li>
                <li className="mb-4 mb-xl-5">{t("Footer.ul2.li.text2")}</li>
                <li className="mb-4 mb-xl-5">{t("Footer.ul2.li.text3")}</li>
              </ul>
            </div>
          </div>

          <div className="Footer__section3 mb-5 d-md-flex mx-md-3 my-md-0">
            <div className="Footer__section3__SN">
              <div className="Footer__section3_SN_Title mb-xl-5">
                <h3>{t("Footer.titleIcons")}</h3>
              </div>
              <div className="Footer__section3__SN__Icons d-flex justify-content-between">
                <img src={"images/facebook-tiggidoo.svg"} alt="" className="iconFacebook" />
                <img src={"images/linkedin-tiggidoo.svg"} alt="" className="iconLinkedin" />
                <img src={"images/instgram-tiggidoo.svg"} alt="" className="iconInstagram" />
              </div>
            </div>
          </div>

          <div className="Footer__plant2">
            <img src={"images/plante-2.svg"} alt="" />
          </div>
        </div>
        <div className="Footer__copiRight d-xl-none">
          <span>{t("Footer.copyRight")}</span>
        </div>
      </div>
      </Container>
    </footer>
  );
}

export default withTranslation()(Footer);