import dentist from '../../assets/categories/dentist.png';
import aesthetic from '../../assets/categories/aesthetic.png';
import psychologist from '../../assets/categories/psychologist.png';
import gym from '../../assets/categories/gym.png';

import clinic1 from '../../assets/clinic1.jpg';
import clinic2 from '../../assets/clinic2.jpg';
import clinic3 from '../../assets/clinic3.jpg';
export const categories = [
  {
    id: 1,
    name: 'Dentista',
    icon: dentist,
  },
  {
    id: 2,
    name: 'Estética',
    icon: aesthetic,
  },
  {
    id: 3,
    name: 'Psicólogo',
    icon: psychologist,
  },
  {
    id: 4,
    name: 'Academia',
    icon: gym,
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
      clinic1,
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
       clinic2,
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
      clinic3,
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