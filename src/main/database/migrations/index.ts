import { createItemTable } from './create_items_table';

export async function runMigrations(): Promise<void> {
  try {
    await createItemTable();
  } catch (error) {
    console.error('Migrations failed: ', error);
  }
}
