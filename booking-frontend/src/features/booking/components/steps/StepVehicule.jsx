const VEHICLES = [
  { label: 'Mini Bus', capacity: 28 },
  { label: 'Mini Bus', capacity: 29 },
  { label: 'Grand Bus', capacity: 52 },
  { label: 'Micro bus', capacity: 14 },
  { label: 'Micro bus', capacity: 15 },
  { label: 'Voiture VIP', capacity: 3 },
];

export default function StepVehicule({ data, updateField, onNext, onBack }) {
  return (
    <div>
      <h2>Choix du véhicule</h2>
      <div className="options-grid">
        {VEHICLES.map(v => {
          const value = `${v.label} (${v.capacity})`;
          return (
            <button
              key={value}
              type="button"
              className={`option-card ${data.vehicleType === value ? 'selected' : ''}`}
              onClick={() => updateField('vehicleType', value)}
            >
              <strong>{v.label}</strong>
              <span>{v.capacity} passagers</span>
            </button>
          );
        })}
      </div>
      <div className="actions">
        <button type="button" className="btn-secondary" onClick={onBack}>← Précédent</button>
        <button
          type="button"
          className="btn-primary"
          disabled={!data.vehicleType}
          onClick={onNext}
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}