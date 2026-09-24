export default function StepVoyageurs({ data, updateField, onNext, onBack }) {
  return (
    <div>
      <h2>Voyageurs</h2>

      <div className="row">
        <div>
          <label>Nombre de passagers</label>
          <input
            type="number"
            min="1"
            value={data.passengerCount}
            onChange={e => updateField('passengerCount', parseInt(e.target.value) || 1)}
          />
        </div>
        <div>
          <label>Nombre de bagages</label>
          <input
            type="number"
            min="0"
            value={data.luggageCount}
            onChange={e => updateField('luggageCount', parseInt(e.target.value) || 0)}
          />
        </div>
      </div>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={data.hasBabySeat}
          onChange={e => updateField('hasBabySeat', e.target.checked)}
        />
        Siège bébé
      </label>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={data.hasPmrAssistance}
          onChange={e => updateField('hasPmrAssistance', e.target.checked)}
        />
        Assistance PMR
      </label>

      <div className="actions">
        <button type="button" className="btn-secondary" onClick={onBack}>← Précédent</button>
        <button type="button" className="btn-primary" onClick={onNext}>Suivant →</button>
      </div>
    </div>
  );
}