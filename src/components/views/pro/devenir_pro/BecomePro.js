import React from "react";
import Intro from "./sections/Intro";
import Platform from "./sections/Platform";
import HowItWorks from "./sections/HowItWorks";
import SliderPro from "./sections/SliderPro";
import Services from "./sections/Services";
import SubmitMyApplication from "./sections/SubmitMyApplication";
import Conditions from "./sections/Conditions";
//import QuestionsPro from "./sections/QuestionsPro";
import MyQuestions from "./sections/MyQuestions";

import "./css/becomepro.scss";
import HeaderRP from "../../../layout/HeaderRP";
import FooterRP from "../../../layout/FooterRP";

export default function BecomePro() {
  return (
    <div>
      <HeaderRP />
      <Intro />
      <Platform />
      <HowItWorks />
      <section className="DPBecomeAndServices">
        <SliderPro />
        <Services />
      </section>
      <SubmitMyApplication />
      <Conditions />
      <MyQuestions />      
      <FooterRP />
    </div>
  );
}
