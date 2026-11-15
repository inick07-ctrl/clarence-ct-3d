// Add a new home: create models/smith-0N.js (see smith-02.js for the format) and list it here.
export default [
  { id: 'smith-01', name: 'Smith 01', load: () => import('./smith-01.js') },
  { id: 'smith-02', name: 'Smith 02', load: () => import('./smith-02.js') },
];
