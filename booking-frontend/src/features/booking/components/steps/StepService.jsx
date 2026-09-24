const SERVICE_TYPES = [
  'Business Travel',
  'Transfert Aéroport - Hôtel',
  'Location avec chauffeur',
  'Transfert Partagé',
  'VIP transfert',
  'Transfert privé',
];

export default function StepService({ data, updateField, onNext }) {
  return (
    <div>
      <h2>Type de service</h2>
      <div className="options-grid">
        {SERVICE_TYPES.map(type => (
          <button
            key={type}
            type="button"
            className={`option-card ${data.serviceType === type ? 'selected' : ''}`}
            onClick={() => updateField('serviceType', type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="actions actions-end">
        <button
          type="button"
          className="btn-primary"
          disabled={!data.serviceType}
          onClick={onNext}
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}