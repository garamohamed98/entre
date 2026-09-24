export default function TopNav({ view, setView }) {
  return (
    <nav className="top-nav">
      <div className="top-nav-brand">🚐 Booking Admin</div>
      <div className="top-nav-links">
        <button
          className={view === 'dashboard' ? 'nav-link active' : 'nav-link'}
          onClick={() => setView('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={view === 'wizard' ? 'nav-link active' : 'nav-link'}
          onClick={() => setView('wizard')}
        >
          Nouvelle réservation
        </button>
      </div>
    </nav>
  );
}