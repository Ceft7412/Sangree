import { db } from '../db';

export function createUserTable(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Step 1: Create the table if it doesn't exist
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT NOT NULL,
        firstname TEXT NOT NULL,
        lastname TEXT NOT NULL,
        password TEXT NOT NULL,
        is_first_login BOOLEAN,
        status TEXT DEFAULT 'active',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      (error) => {
        if (error) {
          console.error('Failed to create users table:', error);
          reject(error);
          return;
        }

        console.log('Users table is ready.');

        // Step 2: Check if the table is empty
        db.get(`SELECT COUNT(*) as count FROM users`, (err, row) => {
          if (err) {
            console.error('Error querying users table:', err.message);
            reject(err);
            return;
          }

          // Step 3: If the table is empty, insert sample data
          if (row.count === 0) {
            db.run(
              `
              INSERT INTO users (id, username, firstname, lastname, password, is_first_login, status)
              VALUES (1, 'cedrick74112', 'cedrick', 'caceres', 'cedrick1', TRUE, 'active')
              `,
              (insertErr) => {
                if (insertErr) {
                  console.error('Error inserting sample data:', insertErr.message);
                  reject(insertErr);
                } else {
                  console.log('Sample data inserted into users table.');
                  resolve();
                }
              }
            );
          } else {
            console.log('Users table already has data.');
            resolve();
          }
        });
      }
    );
  });
}
