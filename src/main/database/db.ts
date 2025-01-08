const sqlite3 = require('sqlite3').verbose();
const path = require('path');

export const dbPath = path.join(__dirname, 'inventory.db');

export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to connect to database.', err);
  } else {
    console.log('Connected to database.');
  }
});
