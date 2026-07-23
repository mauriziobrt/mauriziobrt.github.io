export async function load() {
  const modules = import.meta.glob('/src/content/projects/*.md', { eager: true });
  const data = Object.entries(modules).map(([path, mod]) => ({
    slug: path.split('/').pop().replace('.md', ''),
    ...mod.metadata
  })).sort((a, b) => b.year - a.year);

  return { data };
}