import { createItemTable } from './create_items_table';
import { createUserTable } from './create_user_table';

export async function runMigrations(): Promise<void> {
  try {
    await createUserTable();
    await createItemTable();
  } catch (error) {
    console.error('Migrations failed: ', error);
  }
}
