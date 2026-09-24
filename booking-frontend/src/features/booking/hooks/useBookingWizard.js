import { useState } from 'react';
import { createBooking } from '../api';

const STEPS = ['Service', 'Voyage', 'Voyageurs', 'Véhicule', 'Options', 'Infos'];

const initialData = {
  serviceType: '',
  departureLocation: '',
  destination: '',
  departureDate: '',
  departureTime: '',
  returnDate: '',
  returnTime: '',
  isRoundTrip: false,
  passengerCount: 1,
  luggageCount: 1,
  hasBabySeat: false,
  hasPmrAssistance: false,
  vehicleType: '',
  hasMineralWater: false,
  fullName: '',
  email: '',
  whatsapp: '',
  comment: '',
  companyName: '',
  companyDepartment: '',
  costCenter: '',
  fileReference: '',
  isCompanyInvoicing: false,
};

export function useBookingWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const updateField = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    setSubmitting(true);
    setErrors({});
    try {
      const payload = { ...data };

      if (!payload.isRoundTrip) {
        payload.returnDate = null;
        payload.returnTime = null;
      } else {
        payload.returnDate = payload.returnDate || null;
        payload.returnTime = payload.returnTime || null;
      }

      if (!payload.departureDate || !payload.departureTime) {
        setErrors({
          departureDate: !payload.departureDate ? 'La date de départ est requise' : undefined,
          departureTime: !payload.departureTime ? "L'heure de départ est requise" : undefined,
        });
        setSubmitting(false);
        return;
      }

      if (payload.departureTime.length === 5) payload.departureTime += ':00';
      if (payload.returnTime && payload.returnTime.length === 5) payload.returnTime += ':00';

      await createBooking(payload);
      setSuccess(true);
    } catch (err) {
      if (err.errors) setErrors(err.errors);
      else alert(err.error || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return {
    STEPS,
    step,
    data,
    errors,
    submitting,
    success,
    updateField,
    next,
    back,
    handleSubmit,
  };
}