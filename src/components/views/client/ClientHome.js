
import "./scss/app.scss";

import Header from "../../layout/client/HeaderCL";
import Hero from "./sections/Hero";
import FooterCl from "../../layout/client/FooterCl";
import Services from "./sections/Services";
import Steps from "./sections/Steps";
import Experts from "./sections/Experts";
import Advantages from "./sections/Advantages";
import Cta from "./sections/Cta";


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
            <FooterCl />
        </div>
    )
}

export default ClientHome
