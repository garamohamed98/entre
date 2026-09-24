export default function StepVoyage({ data, updateField, errors, onNext, onBack }) {
  const canProceed =
    data.departureLocation && data.destination && data.departureDate && data.departureTime;

  return (
    <div>
      <h2>Informations du voyage</h2>

      <label>Lieu de départ</label>
      <input
        value={data.departureLocation}
        onChange={e => updateField('departureLocation', e.target.value)}
        placeholder="Ex: Aéroport Tunis-Carthage"
      />
      {errors.departureLocation && <span className="error">{errors.departureLocation}</span>}

      <label>Destination</label>
      <input
        value={data.destination}
        onChange={e => updateField('destination', e.target.value)}
        placeholder="Ex: Hotel Laico Tunis"
      />
      {errors.destination && <span className="error">{errors.destination}</span>}

      <div className="row">
        <div>
          <label>Date de départ</label>
          <input
            type="date"
            value={data.departureDate}
            onChange={e => updateField('departureDate', e.target.value)}
          />
          {errors.departureDate && <span className="error">{errors.departureDate}</span>}
        </div>
        <div>
          <label>Heure de départ</label>
          <input
            type="time"
            value={data.departureTime}
            onChange={e => updateField('departureTime', e.target.value)}
          />
          {errors.departureTime && <span className="error">{errors.departureTime}</span>}
        </div>
      </div>

      {data.isRoundTrip && (
        <div className="row">
          <div>
            <label>Date de retour</label>
            <input
              type="date"
              value={data.returnDate || ''}
              onChange={e => updateField('returnDate', e.target.value)}
            />
          </div>
          <div>
            <label>Heure de retour</label>
            <input
              type="time"
              value={data.returnTime || ''}
              onChange={e => updateField('returnTime', e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="row">
        <button
          type="button"
          className={`toggle-card ${!data.isRoundTrip ? 'selected' : ''}`}
          onClick={() => updateField('isRoundTrip', false)}
        >
          Aller simple
        </button>
        <button
          type="button"
          className={`toggle-card ${data.isRoundTrip ? 'selected' : ''}`}
          onClick={() => updateField('isRoundTrip', true)}
        >
          Aller retour
        </button>
      </div>

      <div className="actions">
        <button type="button" className="btn-secondary" onClick={onBack}>← Précédent</button>
        <button type="button" className="btn-primary" disabled={!canProceed} onClick={onNext}>Suivant →</button>
      </div>
    </div>
  );
}