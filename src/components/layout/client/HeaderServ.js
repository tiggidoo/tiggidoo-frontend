import { Helmet } from 'react-helmet';

import { useState, useRef, useEffect } from 'react'

import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../../../store/actions/authAction';

import { useTranslation } from "react-i18next";

import { withRouter } from "react-router";
import { useLocation } from 'react-router-dom'

import { Box, Typography } from '@material-ui/core'
import Stepper from '../../views/client/section-parts/HorizontalLinearStepper';


const HeaderServ = ({ history }) => {

	const { t, i18n } = useTranslation();
	function changeLanguage(lang) {
		//When the user click on the button to change the language, this function is reached and the language is changed.
		i18n.changeLanguage(lang);
	}

	const lang = i18n.language;
	let langLabel = "En";
	if (lang === 'en') {
		langLabel = "Fr";
	}

	const { auth: { isLoggedIn, access_token } } = useSelector(
		state => ({
			auth: state.auth
		})
	)

	const dispatch = useDispatch();
	const logOut = (e) => {
		e.preventDefault();
		dispatch(logOutAction(access_token, history));
	}

	// Change Nav bg on Scroll
	const [navBackground, setNavBackground] = useState(false)
	const navRef = useRef()
	navRef.current = navBackground

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 50
			if (navRef.current !== show) {
				setNavBackground(show)
			}
		}
		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	function toggleCollapse() {
		document.getElementById("clientNav").classList.toggle("menu_open");
	}

	const location = useLocation()

	return (
		<div>
			<Helmet>
				<title>{t("SEO.title")}</title>
				<meta name="description" content={t("SEO.meta.description")} />
				<meta name="keywords" content={t("SEO.meta.keywords")} />
			</Helmet>

			<Navbar expand="xl" id="clientNav" className={`ServiceNav ${navBackground ? "ServiceNav__nav--scrolled" : ""}`}>
				<Box className="NavBar__container">
					<Navbar.Brand href="#home">
						<img
							src={"images/logo_tiggidoo.svg"}
							className="NavBar__logo"
							alt=""
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => toggleCollapse()} />

					<Navbar.Collapse className="">
						<Nav className="NavBar__menu">
							<Stepper />
							<Nav.Link
								href="#"
								className="NavBar__language__item NavBar__item"
								onClick={() => changeLanguage(langLabel.toLowerCase())}
							>
								{langLabel}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>

				</Box>

				{location.pathname === '/housing' &&
					<Typography component="h2" variant="h2">
						{t("Client.Logement.sectionTitle1")}
					</Typography>
				}

				{location.pathname === '/benefit' &&
					<Typography component="h2" variant="h2">
						{t("Client.Logement.sectionTitle2")}
					</Typography>
				}

			</Navbar>
		</div>
	);
}

export default withRouter(HeaderServ);