// Add a new home: create models/smith-0N.js (see smith-02.js for the format) and list it here.
export default [
  { id: 'smith-01', name: 'Smith 01', load: () => import('./smith-01.js') },
  { id: 'smith-02', name: 'Smith 02', load: () => import('./smith-02.js') },
  { id: 'smith-03', name: 'Smith 03', load: () => import('./smith-03.js') },
  { id: 'smith-04', name: 'Smith 04', load: () => import('./smith-04.js') },
  { id: 'smith-05', name: 'Smith 05', load: () => import('./smith-05.js') },
  { id: 'smith-06', name: 'Smith 06', load: () => import('./smith-06.js') },
  { id: 'smith-07', name: 'Smith 07', load: () => import('./smith-07.js') },
];
