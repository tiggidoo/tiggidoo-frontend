import { withTranslation } from "react-i18next"
import { Col, Row } from "react-bootstrap"

import { Box } from '@material-ui/core'

import { Link } from 'react-router-dom'


function FooterServ({ t }) {
    return (
        <footer className="FooterServ">
            <Box className="FooterServ_info">
                <Row className="main_wrapper">
                    <Col sm={6} md={6} lg={6} xl={3}>
                        <Box className="FooterServ_info__row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="54.7" viewBox="0 0 23.072 29.358">
                                <g transform="translate(0.5 0.508)">
                                    <path className="a" d="M21.846,5.739,11.193.062a.529.529,0,0,0-.5,0L.33,5.742a.53.53,0,0,0-.275.465v7.415a15.354,15.354,0,0,0,9.2,14.052L10.7,28.3a.53.53,0,0,0,.422,0l1.62-.7a15.323,15.323,0,0,0,9.39-14.127V6.207A.531.531,0,0,0,21.846,5.739Zm-.78,7.736a14.265,14.265,0,0,1-8.744,13.151l0,0-1.411.609L9.682,26.7a14.292,14.292,0,0,1-8.566-13.08v-7.1l9.832-5.388L21.066,6.525Zm0,0" transform="translate(-0.055 0)" />
                                    <path className="a" d="M80.776,148.253a.53.53,0,0,0-.807.689l2.8,3.281a.53.53,0,0,0,.738.067l6.525-5.308a.53.53,0,1,0-.669-.823l-6.123,4.981Zm0,0" transform="translate(-73.796 -134.974)" />
                                </g>
                            </svg>

                            <p>{t("Client.Advantages.text1")}</p>
                        </Box>
                    </Col>

                    <Col sm={6} md={6} lg={6} xl={3}>
                        <Box className="FooterServ_info__row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50.267" height="54.6" viewBox="0 0 50.267 54.6">
                                <path className="a" d="M69.044,12.872a1.431,1.431,0,0,0-.138-.611,1.335,1.335,0,0,0-.933-.738L44.5.138a1.393,1.393,0,0,0-1.21,0l-23.7,11.489a1.388,1.388,0,0,0-.784,1.2v28.89a1.373,1.373,0,0,0,.784,1.245l23.7,11.489c.012,0,.012,0,.023.012a.41.41,0,0,1,.1.046c.012,0,.023.012.046.012l.1.035c.012,0,.023.012.035.012.035.012.081.012.115.023h.035c.046,0,.1.012.15.012a.657.657,0,0,0,.15-.012h.035a.409.409,0,0,0,.115-.023c.012,0,.023-.012.035-.012l.1-.035c.012,0,.023-.012.046-.012a.409.409,0,0,0,.1-.046c.012,0,.012,0,.023-.012L68.283,42.926a1.394,1.394,0,0,0,.784-1.245V12.907C69.044,12.9,69.044,12.884,69.044,12.872ZM43.887,2.916l20.558,9.968L56.874,16.56,36.316,6.592Zm0,19.936L23.329,12.884l9.818-4.759,20.558,9.968ZM21.566,15.108,42.5,25.26V50.993L21.566,40.84Zm23.7,35.885V25.26l9.83-4.771v6.73a1.383,1.383,0,0,0,2.766,0V19.141l8.412-4.079V40.794Z" transform="translate(-18.8)" />
                            </svg>

                            <p>{t("Client.Advantages.text2")}</p>
                        </Box>
                    </Col>

                    <Col sm={6} md={6} lg={6} xl={3}>
                        <Box className="FooterServ_info__row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="63.047" height="50.18" viewBox="0 0 63.047 50.18">
                                <g transform="translate(1.5 -6.32)"><path className="b" d="M56.292,5.625H8.255a5.907,5.907,0,0,0-5.978,5.9L2.25,46.907a5.93,5.93,0,0,0,6,5.9H56.292a5.93,5.93,0,0,0,6-5.9V11.522A5.93,5.93,0,0,0,56.292,5.625Zm0,41.282H8.255V23.2H56.292Zm0-29.487H8.255v-5.9H56.292Z" transform="translate(-2.25 2.195)" />
                                </g>
                            </svg>
                            
                            <p>{t("Client.Advantages.text3")}</p>
                        </Box>
                    </Col>

                    <Col sm={6} md={6} lg={6} xl={3}>
                        <Box className="FooterServ_info__row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="59.383" height="71.11" viewBox="0 0 59.383 71.11">
                                <path className="a" d="M59.535,33.657a12.772,12.772,0,0,0-4.451-9.684,25.274,25.274,0,0,0-50.481,0,12.792,12.792,0,0,0,8.356,22.49,1.624,1.624,0,0,0,1.624-1.624V22.475a1.624,1.624,0,0,0-1.624-1.624,12.736,12.736,0,0,0-4.868.967,22.026,22.026,0,0,1,43.505,0,12.732,12.732,0,0,0-4.867-.967,1.624,1.624,0,0,0-1.624,1.624V44.84a1.624,1.624,0,0,0,1.624,1.624,12.728,12.728,0,0,0,4.875-.969,22.091,22.091,0,0,1-16.31,17.874,6.147,6.147,0,0,0-5.458-3.092c-3.347,0-6.069,2.43-6.069,5.417s2.722,5.417,6.069,5.417A5.9,5.9,0,0,0,35.8,66.581,25.329,25.329,0,0,0,55.09,43.337,12.775,12.775,0,0,0,59.535,33.657Zm-48.2,9.421a9.56,9.56,0,0,1,0-18.841Zm18.5,24.784c-1.555,0-2.821-.973-2.821-2.168s1.266-2.168,2.821-2.168,2.82.973,2.82,2.168S31.391,67.862,29.836,67.862ZM48.353,24.237a9.56,9.56,0,0,1,0,18.841Zm0,0" transform="translate(-0.152)"/>
                            </svg>
                            
                            <p>{t("Client.Advantages.text4")}</p>
                        </Box>
                    </Col>
                </Row>
            </Box>

            <Box className="FooterServ_main">
                <Box className="FooterServ__box d-md-flex justify-content-md-between pt-xl-5 pt-sm-4 pb-sm-4 pb-xl-4">
                    <Box className="d-flex flex-column justify-content-between">
                        <img
                            src={"images/logo_tiggidoo_all_white.svg"}
                            alt="logo_tiggidoo"
                            className="Footer_logo"
                        />

                        <Box className="desktop_copyright mt-xl-4">
                            <ul className="d-flex mt-4">
                                <li className="mb-4 mb-xl-5 mr-4 Footer__link">
                                    <Link to="/">{t("Footer.ul2.li.text2")}</Link>
                                </li>

                                <li className="mb-4 mb-xl-5 Footer__link">
                                    <Link to="/">{t("Footer.ul2.li.text3")}</Link>
                                </li>
                            </ul>
                        </Box>
                    </Box>

                    <Box className="Footer_pay-icons">
                        <span>
                            <img src={"images/icon_american-express.svg"} alt="icon_american-express" />
                        </span>

                        <span>
                            <img src={"images/icon_apple-pay.svg"} alt="icon_apple-pay" />
                        </span>

                        <span>
                            <img src={"images/icon_mastercard.svg"} alt="icon_mastercard" />
                        </span>

                        <span>
                            <img src={"images/icon_visa.png"} alt="icon_visa" />
                        </span>
                    </Box>
                </Box>
            </Box>
        </footer>
    );
}

export default withTranslation()(FooterServ);