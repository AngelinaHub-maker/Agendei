export const categories = [
  {
    id: 1,
    name: 'Dentista',
    icon: '🦷',
  },
  {
    id: 2,
    name: 'Estética',
    icon: '💅',
  },
  {
    id: 3,
    name: 'Psicólogo',
    icon: '🧠',
  },
  {
    id: 4,
    name: 'Academia',
    icon: '🏋️',
  },
];

export const establishments = [
  {
    id: 1,
    name: 'Clínica Sorriso',
    category: 'Dentista',
    rating: 4.9,
    address: 'Rua das Flores, 120',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    services: [
      {
        id: 1,
        name: 'Limpeza Dental',
        price: 'R$ 120',
      },
      {
        id: 2,
        name: 'Clareamento',
        price: 'R$ 350',
      },
    ],
  },

  {
    id: 2,
    name: 'Studio Bella',
    category: 'Estética',
    rating: 4.8,
    address: 'Av. Central, 455',
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop',
    services: [
      {
        id: 1,
        name: 'Design de Sobrancelha',
        price: 'R$ 50',
      },
      {
        id: 2,
        name: 'Spa Facial',
        price: 'R$ 180',
      },
    ],
  },

  {
    id: 3,
    name: 'MindCare',
    category: 'Psicólogo',
    rating: 5.0,
    address: 'Rua Aurora, 90',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    services: [
      {
        id: 1,
        name: 'Consulta Terapêutica',
        price: 'R$ 200',
      },
    ],
  },
];

export const bookings = [
  {
    id: 1,
    establishment: 'Clínica Sorriso',
    service: 'Limpeza Dental',
    date: '12 Maio',
    hour: '14:00',
  },

  {
    id: 2,
    establishment: 'Studio Bella',
    service: 'Spa Facial',
    date: '18 Maio',
    hour: '10:30',
  },
];