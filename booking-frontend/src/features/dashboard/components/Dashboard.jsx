import { useState } from 'react';
import { useBookings } from '../hooks/useBookings';
import BookingDetailModal from './BookingDetailModal';

export default function Dashboard() {
  const { bookings, loading, error, deletingId, remove } = useBookings();
  const [selected, setSelected] = useState(null);

  return (
    <div className="dashboard-layout">
      <div className="dashboard-header">
        <h1>Réservations</h1>
        <div className="dashboard-stats">
          <div className="stat-card">
            <span className="stat-number">{bookings.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{bookings.filter(b => b.isRoundTrip).length}</span>
            <span className="stat-label">Aller-retour</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{bookings.filter(b => b.isCompanyInvoicing).length}</span>
            <span className="stat-label">Facturation société</span>
          </div>
        </div>
      </div>

      {loading && <div className="dashboard-message">Chargement...</div>}
      {error && <div className="dashboard-message error">{error}</div>}
      {!loading && !error && bookings.length === 0 && (
        <div className="dashboard-message">Aucune réservation pour le moment.</div>
      )}

      {!loading && !error && bookings.length > 0 && (
        <div className="table-wrapper">
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Client</th><th>Service</th><th>Trajet</th><th>Date</th>
                <th>Passagers</th><th>Véhicule</th><th>Type</th><th></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id}>
                  <td>
                    <div className="cell-primary">{b.fullName}</div>
                    <div className="cell-secondary">{b.email}</div>
                  </td>
                  <td>{b.serviceType}</td>
                  <td>
                    <div className="cell-primary">{b.departureLocation}</div>
                    <div className="cell-secondary">→ {b.destination}</div>
                  </td>
                  <td>
                    <div className="cell-primary">{b.departureDate}</div>
                    <div className="cell-secondary">{b.departureTime}</div>
                  </td>
                  <td>{b.passengerCount}</td>
                  <td>{b.vehicleType}</td>
                  <td>
                    <span className={`badge ${b.isRoundTrip ? 'badge-blue' : 'badge-grey'}`}>
                      {b.isRoundTrip ? 'Aller-retour' : 'Aller simple'}
                    </span>
                  </td>
                  <td className="cell-actions">
                    <button className="btn-icon" onClick={() => setSelected(b)}>Voir</button>
                    <button
                      className="btn-icon btn-icon-danger"
                      disabled={deletingId === b.id}
                      onClick={() => remove(b.id)}
                    >
                      {deletingId === b.id ? '...' : 'Supprimer'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selected && <BookingDetailModal booking={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}