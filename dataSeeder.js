const restaurantList = require('./mergedData.json');
const algoliasearch = require('algoliasearch');
const chunk = require('lodash.chunk');

const client =  algoliasearch('UDMP9G16OH','4cea8dbb3c71108707028c780f4063f1');
const index = client.initIndex('Algolia');

const chunks = chunk(restaurantList, 1000);
const seed = () => {
  chunks.map(batch => {
    return index.addObjects(batch);
  });
};

seed();