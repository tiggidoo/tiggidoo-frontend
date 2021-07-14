/*  
    This is the Hero section of Client Home page. 
*/
import { Col, Container, Row } from "react-bootstrap";
import { makeStyles, Typography, Box } from '@material-ui/core'
import { withTranslation } from "react-i18next";
import PostCodeCl from "../../section-parts/PostCodeCl";


const useStyle = makeStyles((theme) => ({
    ClHero__title: {
        marginTop: '143px',
        marginBottom: '38px',
        '& span': {
            fontSize: '35px',
            display: 'block',

            '@media (max-width:1200px)': {
                fontSize: '33px',
            },
            '@media (max-width:599px)': {
                fontSize: '19px',
            }
        },

        '@media (max-width:599px)': {
            marginTop: '30px',
            marginBottom: '10px',
        }
    }
}))


function Hero({ t }) {
    const classes = useStyle();

    return (
        <section className="ClHero">
            <Container>
                <Row>
                    <Col md={12} lg={6} className="pr-xl-5">
                        <Box className="ClHero__box d-flex flex-column mt-5">
                            <Typography variant="h1" className={classes.ClHero__title}>
                                {t("Client.Hero.title1")}
                                <Box component="span">{t("Client.Hero.title2")}</Box>
                            </Typography>

                            <img
                                src={"../images/cl_home_hero_asset.png"}
                                alt=""
                                className="DPIntro__imgMenage d-md-block d-lg-none mt-5 mb-5"
                            />

                            <Box className="ClHero_paragraph">
                                <p className="ClHero__text mb-4 pb-xl-4">
                                    <Box component="span" className="font-weight-bold">TIGGID</Box>
                                    <Box component="span" className="font-weight-bold green_text">Oo</Box>&nbsp;
                                    {t("Client.Hero.text1")}
                                </p>

                                <p className="ClHero__text mb-4 pb-xl-4">
                                    <Box component="span">{t("Client.Hero.text2_1")}</Box>&nbsp;
                                    <Box component="span" className="font-weight-bold">{t("Client.Hero.text2_2")}</Box>&nbsp;
                                    <Box component="span">{t("Client.Hero.text2_3")}</Box>&nbsp;
                                    <Box component="span" className="font-weight-bold">{t("Client.Hero.text2_4")}</Box>
                                </p>
                            </Box>

                            <PostCodeCl />
                        </Box>
                    </Col>

                    <Col md={12} lg={6}>
                        <Box className="ClHero__box d-flex flex-column h-100 mt-5">
                            <img
                                src={"../images/cl_home_hero_asset.png"}
                                alt=""
                                className="ClHero__img d-none d-lg-block"
                            />
                        </Box>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default withTranslation()(Hero);
