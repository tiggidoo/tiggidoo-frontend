
import "./scss/app.scss";

import Header from "../../layout/client/HeaderCL";
import Hero from "./sections/Hero";
import FooterCl from "../../layout/client/FooterCl";


function ClientHome () {
    return (
        <div>
            <Header />
            <Hero />
            <FooterCl />
        </div>
    )
}

export default ClientHome
