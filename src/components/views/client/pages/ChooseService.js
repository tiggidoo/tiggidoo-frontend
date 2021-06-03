
import "../scss/app.scss";

import Footer from "../../../layout/client/FooterServ";
import HeaderServ from "../../../layout/client/HeaderServ";
import HousingType from "../sections/chooseService/HousingType";


function ChooseService () {
    return (
        <>
            <HeaderServ />
            <HousingType />
            <Footer />
        </>
    )
}

export default ChooseService
