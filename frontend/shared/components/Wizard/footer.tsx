import { useWizard } from "react-use-wizard";

export const WizardFooter = (): JSX.Element => {
  const {
    isLoading,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
    previousStep,
    nextStep,
    goToStep,
    handleStep,
  } = useWizard();
  return (
    <div className="block-wizard-navigation">
      <div className="upload-btn wow fadeInUp">
        <button
          onClick={() => previousStep()}
          id="upload-btn"
          className="fill-btn"
        >
          Prev
        </button>
        <button onClick={() => nextStep()} id="upload-btn" className="fill-btn">
          Next
        </button>
      </div>
      {isLoading && <p>loading...</p>}
      <div>
        Has next step: {!isLastStep ? "✅" : "⛔"}
        <br />
        Has previous step : {!isFirstStep ? "✅" : "⛔"}
      </div>
      Active step: {activeStep + 1} <br />
    </div>
  );
};
