import React from 'react';
import Intro from './sections/Intro';
import Platform from './sections/Platform';
import HowItWorks from './sections/HowItWorks';
import BecomePro from './sections/BecomePro';
import Services from './sections/Services';
import SubmitMyApplication from './sections/SubmitMyApplication';
import Conditions from './sections/Conditions';
import QuestionsPro from './sections/QuestionsPro';
import MyQuestions from './sections/MyQuestions';

import '../../../css/views/devenir_pro/devenirpro.scss';

export default function DevenirPro(){
    return(
        <div>
            <Intro />
            <Platform />
            <HowItWorks />
            <BecomePro /> 
            <Services /> 
            <SubmitMyApplication />
            <Conditions />
            <QuestionsPro />
            <MyQuestions /> *
        </div>
    );
}