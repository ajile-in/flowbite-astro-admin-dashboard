import { defineConfig } from 'astro/config';

import deno from "@astrojs/deno";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const DEV_PORT = 8080;

// https://astro.build/config
export default defineConfig({
	site: process.env.CI
		? 'https://themesberg.github.io'
		: `http://localhost:${DEV_PORT}`,
	base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,

	output: 'server',
	adapter: deno(),

	/* Like Vercel, Netlify,… Mimicking for dev. server */
	// trailingSlash: 'always',

	// server: {
	// 	/* Dev. server only */
	// 	port: DEV_PORT,
	// },

	integrations: [
		//
		sitemap(),
		tailwind(),
	],
});
