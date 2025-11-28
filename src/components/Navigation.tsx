import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import './Navigation.css';

export function Navigation() {
  const location = useLocation();
  const { currentUser, isAdmin, switchToAdmin, switchToUser } = useUser();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="main-nav">
        <div className="nav-brand">
          <h1>🚨 SaniAlert - Aperçu</h1>
        </div>
        
        <div className="nav-links">
          {isAdmin ? (
            <>
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                📊 Tableau de bord
              </Link>
              <Link to="/report-alert" className={`nav-link ${isActive('/report-alert') ? 'active' : ''}`}>
                🚨 Signaler
              </Link>
              <Link to="/my-alerts" className={`nav-link ${isActive('/my-alerts') ? 'active' : ''}`}>
                📋 Mes alertes
              </Link>
              <Link to="/alerts" className={`nav-link ${isActive('/alerts') ? 'active' : ''}`}>
                🛠️ Gérer
              </Link>
              <Link to="/map" className={`nav-link ${isActive('/map') ? 'active' : ''}`}>
                🗺️ Carte
              </Link>
              <Link to="/reports" className={`nav-link ${isActive('/reports') ? 'active' : ''}`}>
                📈 Rapports
              </Link>
            </>
          ) : (
            <>
              <Link to="/report-alert" className={`nav-link ${isActive('/report-alert') ? 'active' : ''}`}>
                🚨 Signaler
              </Link>
              <Link to="/my-alerts" className={`nav-link ${isActive('/my-alerts') ? 'active' : ''}`}>
                📋 Mes alertes
              </Link>
            </>
          )}
        </div>
        
        <div className="nav-profile">
          <div className="user-menu">
            <span className="user-name">{currentUser.name} ({currentUser.role === 'admin' ? 'Admin' : 'User'})</span>
            <button 
              onClick={isAdmin ? switchToUser : switchToAdmin} 
              className="switch-role-btn"
              title={isAdmin ? 'Passer en mode utilisateur' : 'Passer en mode admin'}
            >
              {isAdmin ? '👤 User' : '👨‍💼 Admin'}
            </button>
          </div>
        </div>
      </nav>
      <div className="demo-notice">
        🔍 Mode aperçu - Les boutons ne sont pas fonctionnels dans cette démo
      </div>
    </>
  );
}

