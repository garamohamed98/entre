export default function StepOptions({ data, updateField, onNext, onBack }) {
  return (
    <div>
      <h2>Options premium</h2>
      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={data.hasMineralWater}
          onChange={e => updateField('hasMineralWater', e.target.checked)}
        />
        Eau minérale
      </label>
      <div className="actions">
        <button type="button" className="btn-secondary" onClick={onBack}>← Précédent</button>
        <button type="button" className="btn-primary" onClick={onNext}>Suivant →</button>
      </div>
    </div>
  );
}