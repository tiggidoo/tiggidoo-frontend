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

export default function BecomePro() {
  return (
    <div>
      <Intro />
      <Platform />
      <HowItWorks />
      <section className="DPBecomeAndServices">
        <SliderPro />
        <Services />
      </section>
      <SubmitMyApplication />
      <Conditions />
      {/* <QuestionsPro /> */}
      <MyQuestions />
    </div>
  );
}
