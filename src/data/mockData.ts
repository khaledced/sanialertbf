import { Alert } from '../types';

export const mockAlerts: Alert[] = [
  {
    id: '1',
    _id: '1',
    type: 'eau',
    severity: 'critique',
    title: 'Fuite d\'eau majeure dans la rue principale',
    description: 'Une fuite d\'eau importante a été détectée dans la rue principale. L\'eau se répand sur la chaussée et pourrait causer des accidents.',
    location: {
      lat: 12.3714,
      lng: -1.5197,
      address: 'Rue de la Paix, Ouagadougou'
    },
    photos: [],
    status: 'inProgress',
    reportedBy: 'user1',
    reportedAt: new Date('2024-11-25T10:00:00'),
    updatedAt: new Date('2024-11-25T10:00:00')
  },
  {
    id: '2',
    _id: '2',
    type: 'dechet',
    severity: 'moyenne',
    title: 'Dépôt sauvage de déchets',
    description: 'Un dépôt important de déchets s\'accumule à côté du marché central. Cela pose un problème sanitaire.',
    location: {
      lat: 12.3650,
      lng: -1.5342,
      address: 'Marché Central, Ouagadougou'
    },
    photos: [],
    status: 'pending',
    reportedBy: 'user2',
    reportedAt: new Date('2024-11-24T14:30:00'),
    updatedAt: new Date('2024-11-24T14:30:00')
  },
  {
    id: '3',
    _id: '3',
    type: 'pollution',
    severity: 'critique',
    title: 'Émission de fumée suspecte',
    description: 'Des émissions de fumée noire provenant d\'une usine locale. L\'odeur est très forte et pourrait être toxique.',
    location: {
      lat: 12.3800,
      lng: -1.5100,
      address: 'Zone industrielle, Ouagadougou'
    },
    photos: [],
    status: 'inProgress',
    reportedBy: 'user3',
    reportedAt: new Date('2024-11-26T08:15:00'),
    updatedAt: new Date('2024-11-26T08:15:00')
  },
  {
    id: '4',
    _id: '4',
    type: 'nourriture',
    severity: 'faible',
    title: 'Vente de nourriture dans des conditions douteuses',
    description: 'Un vendeur de nourriture dans la rue ne respecte pas les normes d\'hygiène de base.',
    location: {
      lat: 12.3700,
      lng: -1.5200,
      address: 'Avenue Kwame N\'Krumah, Ouagadougou'
    },
    photos: [],
    status: 'resolved',
    reportedBy: 'user1',
    reportedAt: new Date('2024-11-20T12:00:00'),
    updatedAt: new Date('2024-11-22T16:30:00')
  },
  {
    id: '5',
    _id: '5',
    type: 'maladie',
    severity: 'moyenne',
    title: 'Cas suspect de maladie dans le quartier',
    description: 'Plusieurs personnes présentent des symptômes similaires dans le quartier. Il serait bon de vérifier.',
    location: {
      lat: 12.3550,
      lng: -1.5250,
      address: 'Quartier Pissy, Ouagadougou'
    },
    photos: [],
    status: 'pending',
    reportedBy: 'user2',
    reportedAt: new Date('2024-11-25T09:00:00'),
    updatedAt: new Date('2024-11-25T09:00:00')
  },
  {
    id: '6',
    _id: '6',
    type: 'eau',
    severity: 'faible',
    title: 'Eau trouble dans le robinet',
    description: 'L\'eau qui sort du robinet est trouble depuis quelques jours. Pas encore critique mais à surveiller.',
    location: {
      lat: 12.3600,
      lng: -1.5300,
      address: 'Zone 30, Ouagadougou'
    },
    photos: [],
    status: 'resolved',
    reportedBy: 'user3',
    reportedAt: new Date('2024-11-18T15:20:00'),
    updatedAt: new Date('2024-11-20T10:00:00')
  }
];

export const mockUserAlerts: Alert[] = [
  mockAlerts[0],
  mockAlerts[3],
  mockAlerts[5]
];

