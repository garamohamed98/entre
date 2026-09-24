// src/features/booking/api.js
const API_URL = 'http://localhost:8000/api/bookings';

export async function createBooking(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw error;
  }

  return res.json();
}

export async function getBookings() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch bookings');
  return res.json();
}

export async function getBooking(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch booking');
  return res.json();
}

export async function deleteBooking(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete booking');
}