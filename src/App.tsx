import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Dashboard } from './pages/Dashboard';
import { handleDemoAction } from './utils/demo';

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="page-container">
      <h1>{title}</h1>
      <p>
        Ceci est un <strong>aperçu sans backend</strong>. Les données et actions sont simulées
        à partir du dossier <strong>quinzaine</strong>.
      </p>
      <button className="btn btn-primary" onClick={(e) => handleDemoAction(e)}>
        Tester l’action dans la future vraie plateforme
      </button>
    </div>
  );
}

export function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report-alert" element={<PlaceholderPage title="Signaler une alerte" />} />
          <Route path="/my-alerts" element={<PlaceholderPage title="Mes alertes" />} />
          <Route path="/alerts" element={<PlaceholderPage title="Gestion des alertes" />} />
          <Route path="/map" element={<PlaceholderPage title="Carte des alertes" />} />
          <Route path="/reports" element={<PlaceholderPage title="Rapports et statistiques" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}



