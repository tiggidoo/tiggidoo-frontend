/*  
    This is the Hero section of Client Home page. 
*/
import { Col, Container, Row } from "react-bootstrap";
import { makeStyles, Typography, Box } from '@material-ui/core'
import { withTranslation } from "react-i18next";
import PostCodeCl from "../section-parts/PostCodeCl";


const useStyle = makeStyles((theme) => ({
    ClHero__title: {
        marginTop: '143px',
        marginBottom: '38px',
        '& span': {
            fontSize: '43px',
            display: 'block'
        },

        '@media (max-width:599px)': {
            marginTop: '53px',
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
                                className="ClHero__img d-md-block"
                            />
                        </Box>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default withTranslation()(Hero);
