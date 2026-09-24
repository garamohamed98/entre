export default function BookingDetailModal({ booking, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Réservation #{booking.id}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="detail-row"><span>Service</span><strong>{booking.serviceType}</strong></div>
          <div className="detail-row"><span>Trajet</span><strong>{booking.departureLocation} → {booking.destination}</strong></div>
          <div className="detail-row"><span>Date de départ</span><strong>{booking.departureDate} à {booking.departureTime}</strong></div>
          {booking.isRoundTrip && (
            <div className="detail-row"><span>Date de retour</span><strong>{booking.returnDate} à {booking.returnTime}</strong></div>
          )}
          <div className="detail-row"><span>Passagers</span><strong>{booking.passengerCount}</strong></div>
          <div className="detail-row"><span>Bagages</span><strong>{booking.luggageCount}</strong></div>
          <div className="detail-row"><span>Véhicule</span><strong>{booking.vehicleType}</strong></div>
          <div className="detail-row"><span>Siège bébé</span><strong>{booking.hasBabySeat ? 'Oui' : 'Non'}</strong></div>
          <div className="detail-row"><span>Assistance PMR</span><strong>{booking.hasPmrAssistance ? 'Oui' : 'Non'}</strong></div>
          <div className="detail-row"><span>Eau minérale</span><strong>{booking.hasMineralWater ? 'Oui' : 'Non'}</strong></div>

          <hr />

          <div className="detail-row"><span>Nom</span><strong>{booking.fullName}</strong></div>
          <div className="detail-row"><span>Email</span><strong>{booking.email}</strong></div>
          {booking.whatsapp && <div className="detail-row"><span>WhatsApp</span><strong>{booking.whatsapp}</strong></div>}
          {booking.comment && <div className="detail-row"><span>Commentaire</span><strong>{booking.comment}</strong></div>}

          {booking.isCompanyInvoicing && (
            <>
              <hr />
              {booking.companyName && <div className="detail-row"><span>Société</span><strong>{booking.companyName}</strong></div>}
              {booking.companyDepartment && <div className="detail-row"><span>Département</span><strong>{booking.companyDepartment}</strong></div>}
              {booking.costCenter && <div className="detail-row"><span>Centre de coût</span><strong>{booking.costCenter}</strong></div>}
              {booking.fileReference && <div className="detail-row"><span>Référence dossier</span><strong>{booking.fileReference}</strong></div>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}