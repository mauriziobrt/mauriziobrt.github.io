import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

export default {
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
	extensions: ['.svelte', '.svx', '.md'],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
		}
	}
};