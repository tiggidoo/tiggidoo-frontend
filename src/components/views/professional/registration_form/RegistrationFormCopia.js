import React from "react";
import ProForm from "./ProForm";
import BackgroundPro from "./BackgroundPro";
import AdditionalInfoPro from "./AdditionalInfoPro";

const steps = ["Info Pro", "Background Pro", "Additional"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ProForm />;
    case 1:
      return <BackgroundPro />;
    case 2:
      return <AdditionalInfoPro />;
    default:
      throw new Error("Unknown step");
  }
}

export default function RegistrationForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  console.log(React.useState(0)[1]);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      {activeStep === steps.length ? (
        <h1>Thenk you for your orden</h1>
      ) : (
        <React.Fragment>
          {getStepContent(activeStep)}
          <div>
            {activeStep !== 0 && (
              <button onClick={handleBack} className="classBack">
                Back
              </button>
            )}
            <button onClick={handleNext} className="classNextStep">
              {activeStep === steps.length - 1 ? "Place order" : "Next"}
            </button>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
