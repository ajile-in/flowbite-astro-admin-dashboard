import { defineConfig } from 'astro/config';

import deno from "@astrojs/deno";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const DEV_PORT = 2121;
const SITE_URL = import.meta.env.DEV ? `http://localhost:${DEV_PORT}` : `http://useful-rabbit-56.deno.dev`;

console.log(`SITE_URL : ${SITE_URL}`);

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
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
