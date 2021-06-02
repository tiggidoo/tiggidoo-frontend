import { withTranslation } from "react-i18next"

import { Typography, Box } from '@material-ui/core'

import { Link } from 'react-router-dom'


function FooterRP({ t }) {
    return (
        <footer className="Footer">
            <Box className="main_wrapper pt-5 pb-md-5">
                <Box className="Footer__box d-md-flex justify-content-md-between pt-xl-5 pb-xl-4">
                    <Box className="d-flex flex-column justify-content-between">
                        <img
                            src={"images/logo_tiggidoo_all_white.svg"}
                            alt=""
                            className="Footer_logo"
                        />

                        <Box className="desktop_copyright">
                            <ul>

                                <li className="mb-4 mb-xl-5 Footer__link">
                                    <Link to="/">{t("Footer.ul2.li.text2")}</Link>
                                </li>

                                <li className="mb-4 mb-xl-5 Footer__link">
                                    <Link to="/">{t("Footer.ul2.li.text3")}</Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>

                    <Box className="mb-5 mx-md-5 my-md-0">
        <h2>Bla bla</h2>

                    </Box>
                </Box>
            </Box>
        </footer>
    );
}

export default withTranslation()(FooterRP);