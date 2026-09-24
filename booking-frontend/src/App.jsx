import { useState } from 'react';
import BookingWizard from './features/booking/components/BookingWizard';
import Dashboard from './features/dashboard/components/Dashboard';
import TopNav from './shared/components/TopNav';
import './App.css';

export default function App() {
  const [view, setView] = useState('dashboard');

  return (
    <div>
      <TopNav view={view} setView={setView} />
      {view === 'dashboard' ? <Dashboard /> : <BookingWizard />}
    </div>
  );
}