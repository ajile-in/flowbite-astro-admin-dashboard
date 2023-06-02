import { defineConfig } from 'astro/config';

import deno from "@astrojs/deno";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const DEV_PORT = 2121;

// https://astro.build/config
export default defineConfig({
	site: 'https://useful-rabbit-56.deno.dev',
	base: process.env.CI ? '/' : undefined,
	output: 'server',
	adapter: deno(),

	/* Like Vercel, Netlify,… Mimicking for dev. server */
	//trailingSlash: 'always',

	server: {
	// 	/* Dev. server only */
		port: DEV_PORT,
	},

	integrations: [
		//
		sitemap(),
		tailwind(),
	],
});
