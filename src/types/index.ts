export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface Alert {
  id: string;
  _id?: string;
  type: 'eau' | 'nourriture' | 'pollution' | 'maladie' | 'dechet' | 'autre';
  severity: 'faible' | 'moyenne' | 'critique';
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  photos: string[];
  status: 'pending' | 'inProgress' | 'resolved' | 'rejected';
  reportedBy: string;
  reportedAt: Date | string;
  updatedAt: Date | string;
}

