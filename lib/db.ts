import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || 'file:./data/portfolio.db',
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function initializeDb() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT DEFAULT '',
      image TEXT DEFAULT '',
      link TEXT DEFAULT '',
      sort_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export { client };

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  sort_order: number;
  created_at: string;
};

export type ProjectInput = {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  sort_order?: number;
};
