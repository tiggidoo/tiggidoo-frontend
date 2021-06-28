
import "../scss/app.scss";

import { withTranslation } from "react-i18next"
import { useHistory, useLocation } from "react-router-dom";

import Footer from "../../../layout/client/FooterServ";
import HeaderServ from "../../../layout/client/HeaderServ";

import Validation from "../sections/chooseService/Validation";
import HousinBenefitMenu from "../sections/chooseService/HousinBenefitMenu";


function ChooseService({ t }) {
    const history = useHistory()
    const location = useLocation()

   
    var block;
 
    if (location.pathname === '/housing' || location.pathname === '/benefit') {
        block = <HousinBenefitMenu />;
      } else if (location.pathname === '/validation'){
        block = <Validation />;
      }

    return (
        <>
            <HeaderServ />
            {block}
            <Footer />
        </>
    )
}

export default withTranslation()(ChooseService)
