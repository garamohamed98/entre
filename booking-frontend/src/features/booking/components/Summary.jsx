export default function Summary({ data, onSubmit, submitting, isLastStep }) {
  return (
    <aside className="summary-panel">
      <div className="summary-header">
        🔔
        <h3>Votre demande</h3>
        <p>En quelques clics, recevez votre devis personnalisé</p>
      </div>

      <div className="summary-row">
        <span>Service</span>
        <strong>{data.serviceType || 'Non défini'}</strong>
      </div>
      <div className="summary-row">
        <span>Trajet</span>
        <strong>
          {data.departureLocation && data.destination
            ? `${data.departureLocation} → ${data.destination}`
            : 'Non défini'}
        </strong>
      </div>
      <div className="summary-row">
        <span>Date</span>
        <strong>{data.departureDate || 'Non défini'}</strong>
      </div>
      <div className="summary-row">
        <span>Passagers</span>
        <strong>{data.passengerCount} passager(s)</strong>
      </div>
      <div className="summary-row">
        <span>Véhicule</span>
        <strong>{data.vehicleType || 'Non défini'}</strong>
      </div>
      <div className="summary-row">
        <span>Options</span>
        <strong>{data.hasMineralWater ? 'Eau minérale' : 'Aucune option'}</strong>
      </div>

      <button
        type="button"
        className="btn-cta"
        disabled={submitting || !isLastStep}
        onClick={onSubmit}
      >
        {submitting ? 'Envoi...' : 'Recevoir mon devis →'}
      </button>
    </aside>
  );
}