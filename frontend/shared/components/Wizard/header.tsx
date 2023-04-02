import classnames from "classnames";
import { useWizard } from "react-use-wizard";

export const WizardHeader = (): JSX.Element => {
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

  const steps = [
    { id: "register", title: "Register", subtitle: "Register a new resource" },
    { id: "upload", title: "Upload", subtitle: "Upload a new resource" },
  ];
  return (
    <div className="bs-stepper modern-horizontal">
      {steps.map((step, index) => (
        <div key={step.id}>
          {index !== 0 && index !== steps.length ? (
            <div className="line">|</div>
          ) : null}
          <div
            className={classnames("step", {
              crossed: activeStep > index,
              active: index === activeStep,
            })}
            data-target={`#${step.id}`}
          >
            <button type="button" className="step-trigger">
              {/* <span className="bs-stepper-box">
                {step.icon ? step.icon : index + 1}
              </span> */}
              <span className="bs-stepper-label">
                <span className="bs-stepper-title">{step.title}</span>
                {step.subtitle ? (
                  <span className="bs-stepper-subtitle">{step.subtitle}</span>
                ) : null}
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
