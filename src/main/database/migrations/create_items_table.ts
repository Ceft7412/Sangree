import { error } from 'console';
import { db } from '../db';

export function createItemTable(): Promise<void> {
  return new Promise((resolve, reject) => {
    db.run(
      `
        CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            quantity INTEGER DEFAULT 0,
            unit TEXT,
            category TEXT,
            minimum_stock_level INTEGER DEFAULT 0,
            status TEXT DEFAULT 'active',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        `,
      (error) => {
        if (error) {
          console.error('Failed to create items table:', error);
          reject(error);
        } else {
          console.log('Items table is ready.');
          resolve();
        }
      }
    );
  });
}
