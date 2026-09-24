import { useEffect, useState } from 'react';
import { getBookings, deleteBooking } from '../../booking/api';

export function useBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getBookings();
      setBookings(data);
    } catch (e) {
      setError('Impossible de charger les réservations.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    if (!confirm('Supprimer cette réservation ?')) return;
    setDeletingId(id);
    try {
      await deleteBooking(id);
      setBookings(prev => prev.filter(b => b.id !== id));
    } catch (e) {
      alert('Erreur lors de la suppression.');
    } finally {
      setDeletingId(null);
    }
  };

  return { bookings, loading, error, deletingId, remove, reload: load };
}