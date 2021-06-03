import { Low, JSONFile } from 'lowdb';
console.log('🚀 ~ file: jsonDb.service.mjs ~ line 2 ~ JSONFile', JSONFile);
console.log('🚀 ~ file: jsonDb.service.mjs ~ line 2 ~ Low', Low);

// const store = { db: null };
// const path_lists = '../data/imageJson.json';
// // path_lists = path.join(__dirname, path_lists);

// // function db() {
// //     if (store.db) return store.db;
// //     let listAdapter = new FileSync(path_lists);

// //     return low(listAdapter);
// // }
// function db() {
//     if (store.db != null) return store.db;
//     store.db = new Low(new JSONFile(path_lists));
//     return store.db;
// }

// module.exports = { db };
module.exports = { h: 1 };
