import { useBookingWizard } from '../hooks/useBookingWizard';
import StepIndicator from './StepIndicator';
import Summary from './Summary';
import StepService from './steps/StepService';
import StepVoyage from './steps/StepVoyage';
import StepVoyageurs from './steps/StepVoyageurs';
import StepVehicule from './steps/StepVehicule';
import StepOptions from './steps/StepOptions';
import StepInfos from './steps/StepInfos';

export default function BookingWizard() {
  const {
    STEPS, step, data, errors, submitting, success,
    updateField, next, back, handleSubmit,
  } = useBookingWizard();

  if (success) {
    return <div className="success-message">✅ Votre demande a été envoyée avec succès !</div>;
  }

  const stepProps = { data, updateField, errors };

  return (
    <div className="wizard-layout">
      <StepIndicator steps={STEPS} current={step} />

      <div className="wizard-body">
        <div className="wizard-form">
          {step === 0 && <StepService {...stepProps} onNext={next} />}
          {step === 1 && <StepVoyage {...stepProps} onNext={next} onBack={back} />}
          {step === 2 && <StepVoyageurs {...stepProps} onNext={next} onBack={back} />}
          {step === 3 && <StepVehicule {...stepProps} onNext={next} onBack={back} />}
          {step === 4 && <StepOptions {...stepProps} onNext={next} onBack={back} />}
          {step === 5 && <StepInfos {...stepProps} onBack={back} />}
        </div>

        <Summary
          data={data}
          onSubmit={handleSubmit}
          submitting={submitting}
          isLastStep={step === STEPS.length - 1}
        />
      </div>
    </div>
  );
}