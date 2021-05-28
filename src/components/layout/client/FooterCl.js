import React from "react";
import { withTranslation } from "react-i18next";


function FooterRP({ t }) {
    return (
        <footer className="Footer">
            <div className="pt-5 pb-md-5">
                <div className="Footer__box d-md-flex justify-content-md-between pt-xl-5 pb-xl-4">
                    <div className="d-flex flex-column justify-content-between">
                        <img
                            src={"images/logo_tiggidoo_all_white.svg"}
                            alt=""
                            className="Footer_logo"
                        />

                        <div className="desktop_copyright">
                            {t("Client.Footer.copyright")}
                        </div>
                    </div>

                    <div className="mb-5 d-md-flex m-md-0">
                        <div className="mb-5 mb-md-0 mx-md-3 mx-lg-5">
                            <h5 className="mb-4 mb-xl-5">{t("Footer.ul1.title")} </h5>

                            <ul>
                                <li className="mb-4 mb-xl-5">{t("Footer.ul1.li.text1")}</li>
                                <li className="mb-4 mb-xl-5">{t("Footer.ul1.li.text3")}</li>
                                <li className="mb-4 mb-xl-5">{t("Footer.ul1.li.text4")}</li>
                            </ul>
                        </div>

                        <div className="mb-5 mx-md-3  mx-lg-5">
                            <h5 className="mb-4 mb-xl-5">{t("Footer.ul2.title")} </h5>

                            <ul>
                                <li className="mb-4 mb-xl-5">{t("Footer.ul2.li.text1")}</li>
                                <li className="mb-4 mb-xl-5">{t("Footer.ul2.li.text2")}</li>
                                <li className="mb-4 mb-xl-5">{t("Footer.ul2.li.text3")}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-5 d-md-flex mx-md-5 my-md-0">
                        <div>
                            <div className=" mb-xl-5">
                                <h5>{t("Footer.titleIcons")}</h5>
                            </div>

                            <div className="d-flex justify-content-between">
                                <a href="#">
                                    <img src={"images/facebook-tiggidoo.svg"} alt="Facebook" className="iconFacebook" />
                                </a>

                                <a href="#">
                                    <img src={"images/linkedin-tiggidoo.svg"} alt="LinkedIn" className="iconLinkedin" />
                                </a>

                                <a href="#">
                                    <img src={"images/instgram-tiggidoo.svg"} alt="Instagrame" className="iconInstagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-xl-none text-center">
                    {t("Client.Footer.copyright")}
                </div>
            </div>
        </footer>
    );
}

export default withTranslation()(FooterRP);