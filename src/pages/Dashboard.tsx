import { mockAlerts } from '../data/mockData';
import { Alert } from '../types';
import { handleDemoAction } from '../utils/demo';
import './Dashboard.css';

export function Dashboard() {
  const alerts = mockAlerts;

  const stats = {
    active: alerts.filter(a => a.status === 'inProgress').length,
    resolved: alerts.filter(a => a.status === 'resolved').length,
    pending: alerts.filter(a => a.status === 'pending').length
  };

  const recentAlerts = alerts.slice(0, 5);

  const getStatusClass = (status: Alert['status']) => {
    switch (status) {
      case 'inProgress': return 'status-active';
      case 'resolved': return 'status-resolved';
      case 'pending': return 'status-pending';
      default: return 'status-pending';
    }
  };

  const getSeverityIcon = (severity: Alert['severity']) => {
    switch (severity) {
      case 'critique': return '🔴';
      case 'moyenne': return '🟡';
      case 'faible': return '🟢';
      default: return '⚪';
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Tableau de bord</h1>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Alertes actives</h3>
            <div className="stat-number">{stats.active}</div>
            <div className="stat-trend">
              {stats.active > 0 ? `${((stats.active / alerts.length) * 100).toFixed(1)}%` : '0%'} du total
            </div>
          </div>
          <div className="stat-card">
            <h3>Alertes résolues</h3>
            <div className="stat-number">{stats.resolved}</div>
            <div className="stat-trend positive">
              {stats.resolved > 0 ? `${((stats.resolved / alerts.length) * 100).toFixed(1)}%` : '0%'} du total
            </div>
          </div>
          <div className="stat-card">
            <h3>En attente</h3>
            <div className="stat-number">{stats.pending}</div>
            <div className="stat-trend">
              {stats.pending > 0 ? `${((stats.pending / alerts.length) * 100).toFixed(1)}%` : '0%'} du total
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="recent-alerts">
          <div className="section-header">
            <h2>Alertes récentes</h2>
            <button className="view-all-btn" onClick={(e) => handleDemoAction(e)}>
              Voir tout
            </button>
          </div>
          
          <div className="alerts-table">
            <div className="alerts-table-header">
              <span>Type</span>
              <span>Titre</span>
              <span>Sévérité</span>
              <span>Statut</span>
              <span>Date</span>
            </div>
            {recentAlerts.map(alert => (
              <div key={alert.id} className="alert-row" onClick={(e) => handleDemoAction(e)}>
                <span className={`alert-type type-${alert.type}`}>{alert.type}</span>
                <span className="alert-title">{alert.title}</span>
                <span className="alert-severity">
                  {getSeverityIcon(alert.severity)} {alert.severity}
                </span>
                <span className={`alert-status ${getStatusClass(alert.status)}`}>
                  {alert.status}
                </span>
                <span className="alert-date">
                  {new Date(alert.reportedAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-actions">
          <h2>Actions rapides</h2>
          <div className="action-buttons">
            <button className="action-btn create" onClick={(e) => handleDemoAction(e)}>
              Nouvelle alerte
            </button>
            <button className="action-btn view" onClick={(e) => handleDemoAction(e)}>
              Voir la carte
            </button>
            <button className="action-btn export" onClick={(e) => handleDemoAction(e)}>
              Exporter les données
            </button>
          </div>

          <div className="alerts-by-type">
            <h3>Répartition par type</h3>
            <div className="type-stats">
              {['eau', 'nourriture', 'pollution', 'maladie', 'dechet'].map(type => {
                const count = alerts.filter(a => a.type === type).length;
                const percentage = alerts.length > 0 ? (count / alerts.length) * 100 : 0;
                return (
                  <div key={type} className="type-stat-row">
                    <span className="type-name">{type}</span>
                    <div className="type-bar-container">
                      <div 
                        className="type-bar" 
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="type-count">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

