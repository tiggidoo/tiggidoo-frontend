
import "../scss/app.scss";

import Header from "../../../layout/client/HeaderCL";
import Hero from "../sections/clientHome/Hero";
import FooterCl from "../../../layout/client/FooterCl";
import Services from "../sections/clientHome/Services";
import Steps from "../sections/clientHome/Steps";
import Experts from "../sections/clientHome/Experts";
import Advantages from "../sections/clientHome/Advantages";
import Cta from "../sections/clientHome/Cta";
import ProposeService from "../sections/clientHome/ProposeService";


function ClientHome () {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Steps />
            <Experts />
            <Advantages />
            <Cta />
            <ProposeService />
            <FooterCl />
        </div>
    )
}

export default ClientHome
