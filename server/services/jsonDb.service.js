const StormDB = require('stormdb');
const path = require('path')
const store = { db: null };
const path_lists =path.join(__dirname,  '../data/imageJson.json')

// function db() {
//     if (store.db) return store.db;
const engine = new StormDB.localFileEngine(path_lists, {
    async: true,
});
// store.db = new StormDB(engine);
db = new StormDB(engine);
//     return store.db;
// }

module.exports = { db };
