// Add a new home: create models/smith-0N.js (see smith-02.js for the format) and list it here.
export default [
  { id: 'smith-01', name: "Willow Court", load: () => import('./smith-01.js') },
  { id: 'smith-02', name: "Poolside Gables", load: () => import('./smith-02.js') },
  { id: 'smith-03', name: "The Back Forty", load: () => import('./smith-03.js') },
  { id: 'smith-04', name: "Twin Oaks", load: () => import('./smith-04.js') },
  { id: 'smith-05', name: "Triple Gable", load: () => import('./smith-05.js') },
  { id: 'smith-06', name: "Breezeway Hearth", load: () => import('./smith-06.js') },
  { id: 'smith-07', name: "Porchlight Farm", load: () => import('./smith-07.js') },
  { id: 'smith-08', name: "Limewash Hall", load: () => import('./smith-08.js') },
  { id: 'smith-09', name: "The Prairie Lantern", load: () => import('./smith-09.js') },
  { id: 'smith-10', name: "Ember Ranch", load: () => import('./smith-10.js') },
  { id: 'smith-11', name: "Hearth Patio", load: () => import('./smith-11.js') },
];

