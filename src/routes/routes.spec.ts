import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const pageFiles = [
	'./+page.svelte',
	'./clients/+page.svelte',
	'./clients/new/+page.svelte',
	'./clients/[clientId]/+page.svelte',
	'./clients/[clientId]/edit/+page.svelte',
	'./clients/[clientId]/assessments/new/+page.svelte',
	'./professionals/+page.svelte',
	'./professionals/new/+page.svelte',
	'./professionals/[professionalId]/edit/+page.svelte',
	'./assessments/+page.svelte',
	'./assessments/[assessmentId]/+page.svelte',
	'./assessments/[assessmentId]/edit/+page.svelte',
	'./assessments/[assessmentId]/review/+page.svelte',
	'./assessments/[assessmentId]/report/+page.svelte',
	'./settings/+page.svelte',
	'./settings/storage/+page.svelte',
	'./settings/backup/+page.svelte',
	'./settings/about/+page.svelte'
];

describe('rotas iniciais do OSSMA', () => {
	it('mantém as páginas do MVP na raiz', () => {
		expect(pageFiles).toHaveLength(18);

		for (const pageFile of pageFiles) {
			expect(existsSync(join(process.cwd(), 'src/routes', pageFile))).toBe(true);
		}
	});
});
