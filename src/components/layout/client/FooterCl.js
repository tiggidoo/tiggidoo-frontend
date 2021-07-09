import { withTranslation } from "react-i18next"

import { Typography, Box } from '@material-ui/core'

import { Link } from 'react-router-dom'


function FooterCl({ t }) {
    return (
        <footer className="Footer">
            <Box className="main_wrapper pt-5 pb-md-5">
                <Box className="Footer__box d-md-flex justify-content-md-between pt-xl-5 pb-xl-4">
                    <Box className="d-flex flex-column justify-content-between logo_box">
                        <img
                            src={"images/logo_tiggidoo_all_white.svg"}
                            alt=""
                            className="Footer_logo"
                        />

                        <Box className="desktop_copyright">
                            {t("Client.Footer.copyright")}
                        </Box>
                    </Box>

                    <Box className="mb-5 d-md-flex m-md-0">
                        <Box className="mb-5 mb-md-0 mx-md-3 mx-lg-5 Footer__link-Box">
                            <Typography variant="h5" className="mb-4 mb-xl-5">{t("Footer.ul1.title")} </Typography>

                            <ul>
                                <li className="mb-3 mb-xl-5 Footer__link">
                                    <Link to="/">{t("Footer.ul1.li.text1")}</Link>
                                </li>

                                <li className="mb-3 mb-xl-5 Footer__link">
                                    <Link to="/">{t("Footer.ul1.li.text3")}</Link>
                                </li>

                                <li className="mb-3 mb-xl-5 Footer__link">
                                    <Link to="/">{t("Footer.ul1.li.text4")}</Link>
                                </li>
                            </ul>
                        </Box>

                        <Box className="mb-5 mx-md-3 mx-lg-5 Footer__link-Box">
                            <Typography variant="h5" className="mb-4 mb-xl-5">{t("Footer.ul2.title")} </Typography>

                            <ul>
                                <li className="mb-3 mb-xl-5 Footer__link">
                                    <Link to="/">{t("Footer.ul2.li.text1")}</Link>
                                </li>

                                <li className="mb-3 mb-xl-5 Footer__link">
                                    <Link to="/">{t("Footer.ul2.li.text2")}</Link>
                                </li>
                                
                                <li className="mb-3 mb-xl-5 Footer__link">
                                    <Link to="/">{t("Footer.ul2.li.text3")}</Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>

                    <Box className="mb-5 mb-md-0 mr-md-5 my-md-0">
                        
                            <Box className="mb-xl-5 Footer__social-links">
                                <Typography variant="h5">{t("Footer.titleIcons")}</Typography>
                            </Box>

                            {/* <Box className="d-flex justify-content-around">
                                <Link to="www.facebook.com" className="animated_icon" target="_blanc">
                                    <img src={"images/facebook-tiggidoo.svg"} alt="Facebook" className="iconFacebook" />
                                </Link>

                                <Link to="https://www.linkedin.com/" className="animated_icon" target="_blanc">
                                    <img src={"images/linkedin-tiggidoo.svg"} alt="LinkedIn" className="iconLinkedin" />
                                </Link>

                                <Link to="https://instagram.com/" className="animated_icon" target="_blanc">
                                    <img src={"images/instgram-tiggidoo.svg"} alt="Instagrame" className="iconInstagram" />
                                </Link>
                            </Box>
                         */}
                    </Box>
                </Box>

                <Box className="d-xl-none text-center">
                    {t("Client.Footer.copyright")}
                </Box>
            </Box>
        </footer>
    );
}

export default withTranslation()(FooterCl);