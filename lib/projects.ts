import { client, initializeDb, Project, ProjectInput } from './db';

let initialized = false;

async function ensureInit() {
  if (!initialized) {
    await initializeDb();
    initialized = true;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  await ensureInit();
  const result = await client.execute('SELECT * FROM projects ORDER BY sort_order ASC, id DESC');
  return result.rows as unknown as Project[];
}

export async function getProjectById(id: number): Promise<Project | null> {
  await ensureInit();
  const result = await client.execute({
    sql: 'SELECT * FROM projects WHERE id = ?',
    args: [id],
  });
  return (result.rows[0] as unknown as Project) || null;
}

export async function createProject(input: ProjectInput): Promise<Project> {
  await ensureInit();
  const result = await client.execute({
    sql: `INSERT INTO projects (title, description, image, link, sort_order)
          VALUES (?, ?, ?, ?, ?)`,
    args: [
      input.title,
      input.description || '',
      input.image || '',
      input.link || '',
      input.sort_order || 0,
    ],
  });
  return (await getProjectById(Number(result.lastInsertRowid)))!;
}

export async function updateProject(id: number, input: Partial<ProjectInput>): Promise<Project | null> {
  await ensureInit();
  const existing = await getProjectById(id);
  if (!existing) return null;

  const updated = {
    title: input.title ?? existing.title,
    description: input.description ?? existing.description,
    image: input.image ?? existing.image,
    link: input.link ?? existing.link,
    sort_order: input.sort_order ?? existing.sort_order,
  };

  await client.execute({
    sql: `UPDATE projects
          SET title = ?, description = ?, image = ?, link = ?, sort_order = ?
          WHERE id = ?`,
    args: [updated.title, updated.description, updated.image, updated.link, updated.sort_order, id],
  });
  return getProjectById(id);
}

export async function deleteProject(id: number): Promise<boolean> {
  await ensureInit();
  const result = await client.execute({
    sql: 'DELETE FROM projects WHERE id = ?',
    args: [id],
  });
  return result.rowsAffected > 0;
}

export async function getProjectCount(): Promise<number> {
  await ensureInit();
  const result = await client.execute('SELECT COUNT(*) as count FROM projects');
  return (result.rows[0] as unknown as { count: number }).count;
}
