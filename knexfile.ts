const path = require('path');

export const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'src/main/database/inventory.db') // SQLite database file
    },
    migrations: {
      directory: path.join(__dirname, 'src/main/database/migrations') // Folder for migration files
    },
    useNullAsDefault: true // Required for SQLite
  }
};
