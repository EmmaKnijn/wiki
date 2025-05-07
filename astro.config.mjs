// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Knijn Wiki',
			social: {
				github: 'https://github.com/EmmaKnijn/wiki',
			},
			sidebar: [
				{
					label: 'Products',
					// Autogenerate a group of links for the 'constellations' directory.
					autogenerate: { directory: 'products' },
				}
			]
		}),
	],
});
