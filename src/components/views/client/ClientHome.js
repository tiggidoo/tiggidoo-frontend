
import "./scss/app.scss";

import Header from "../../layout/client/HeaderCL";
import Hero from "./sections/Hero";
import FooterCl from "../../layout/client/FooterCl";
import Services from "./sections/Services";
import Steps from "./sections/Steps";


function ClientHome () {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Steps />
            <FooterCl />
        </div>
    )
}

export default ClientHome
