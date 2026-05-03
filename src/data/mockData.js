export const categories = [
  { id: 1, name: 'Médico', image: require('../../assets/categories/cat-medico.png') },
  { id: 2, name: 'Dentista', image: require('../../assets/categories/dentista.png') },
  { id: 3, name: 'Cabeleireiro', image: require('../../assets/categories/cat-cabelo.png') },

  { id: 4, name: 'Personal', image: require('../../assets/categories/cat-personal.png') },
  { id: 5, name: 'Petshop', image: require('../../assets/categories/cat-pet.png') },
  { id: 6, name: 'Pilates', image: require('../../assets/categories/cat-pilates.png') },

  { id: 7, name: 'Manicure', image: require('../../assets/categories/cat-manicure.png') },
  { id: 8, name: 'Nutricionista', image: require('../../assets/categories/cat-nutricao.png') },
  { id: 9, name: 'Lava Car', image: require('../../assets/categories/cat-lavacar.png') },
];

export const establishments = [
  {
    id: 1,
    name: 'Clínica São Gabriel',
    category: 'Médico',
    address: 'Av. Brasil, 1500\nJardins - São Paulo',
    image: require('../../assets/clinic1/foto-clinica.jpg'),
    services: [
      { id: 1, name: 'Consulta', price: 'R$ 100' },
      { id: 2, name: 'Exame', price: 'R$ 200' },
    ],
  },

  {
    id: 2,
    name: 'Clínica Médica São Remo',
    category: 'Médico',
    address: 'Av. Nove de Julho, 854\nCentro - São Paulo',

    services: [
      { id: 1, name: 'Consulta', price: 'R$ 120' },
      { id: 2, name: 'Check-up', price: 'R$ 250' },
    ],
  },

  {
    id: 3,
    name: 'Clínica Médica Assis',
    category: 'Médico',
    address: 'Rua Itapura, 695\nBela Vista - São Paulo',
    
    services: [
      { id: 1, name: 'Consulta', price: 'R$ 110' },
    ],
  },

  {
    id: 4,
    name: 'Clínica Médica Integrada',
    category: 'Médico',
    address: 'Rua Cardoso de Almeida, 997\nPerdizes - São Paulo',
   
    services: [
      { id: 1, name: 'Consulta', price: 'R$ 130' },
    ],
  },
];