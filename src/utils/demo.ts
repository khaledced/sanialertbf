// Fonction utilitaire pour gérer les actions de démo
export const handleDemoAction = (e?: React.MouseEvent, message?: string) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  alert(message || '🔍 Aperçu : Cette fonctionnalité sera disponible dans la version complète');
};

