import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const modules = import.meta.glob('/src/content/discography/*.md');
  console.log('available paths:', Object.keys(modules));
  console.log('looking for slug:', params.slug);

  const entry = Object.entries(modules).find(([path]) =>
    path.endsWith(`/${params.slug}.md`)
  );

  if (!entry) throw error(404, 'Project not found');

  const post = await entry[1]();
  return { meta: post.metadata, content: post.default };
}