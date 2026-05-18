import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { playwright } from '@vitest/browser-playwright';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitest/config';

import { APP_CONFIG } from './src/lib/config/app';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({ project: './project.inlang', outdir: './src/lib/paraglide' }),
		VitePWA({
			registerType: 'autoUpdate',
			injectRegister: false,
			includeAssets: ['robots.txt'],
			manifest: {
				name: APP_CONFIG.name,
				short_name: APP_CONFIG.shortName,
				description: APP_CONFIG.description,
				start_url: '/',
				scope: '/',
				display: 'standalone',
				orientation: 'any',
				theme_color: '#111816',
				background_color: '#111816',
				lang: APP_CONFIG.defaultLanguage,
				icons: [
					{
						src: '/icons/icon-192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: '/icons/icon-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: '/icons/maskable-icon-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					}
				]
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,png,svg,ico,webmanifest}'],
				additionalManifestEntries: [
					{ url: '/', revision: APP_CONFIG.version },
					{ url: '/onboarding', revision: APP_CONFIG.version },
					{ url: '/clients', revision: APP_CONFIG.version },
					{ url: '/profile', revision: APP_CONFIG.version },
					{ url: '/backups', revision: APP_CONFIG.version },
					{ url: '/faqs', revision: APP_CONFIG.version },
					{ url: '/docs', revision: APP_CONFIG.version },
					{ url: '/settings', revision: APP_CONFIG.version }
				],
				navigateFallback: '/',
				navigateFallbackAllowlist: [
					/^\/$/,
					/^\/onboarding\/?$/,
					/^\/clients\/?$/,
					/^\/profile\/?$/,
					/^\/backups\/?$/,
					/^\/faqs\/?$/,
					/^\/docs\/?$/,
					/^\/settings\/?$/
				]
			}
		})
	],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }]
					},
					include: [
						'src/**/*.svelte.{test,spec}.{js,ts}',
						'src/lib/features/**/*-repository.test.ts'
					],
					exclude: ['src/lib/server/**']
				}
			},

			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: [
						'src/**/*.svelte.{test,spec}.{js,ts}',
						'src/lib/features/**/*-repository.test.ts'
					]
				}
			}
		]
	}
});
