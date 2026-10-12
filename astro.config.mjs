// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://igroman4ik228.github.io',
	base: '/dojo-media',
	trailingSlash: 'always',
	integrations: [sitemap()],
	scopedStyleStrategy: 'class',
});
