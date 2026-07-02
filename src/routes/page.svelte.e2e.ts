import { expect, test } from '@playwright/test';

test('exibe o painel e navega sem o prefixo app', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByRole('banner')).toContainText('OSSMA');
	await expect(page.getByRole('heading', { name: 'Painel' })).toBeVisible();

	const navigation = page.getByRole('navigation', { name: 'Navegação principal' });
	await navigation.getByRole('link', { name: 'Clientes' }).click();

	await expect(page).toHaveURL(/\/clients$/);
	await expect(page.getByRole('heading', { name: 'Clientes' })).toBeVisible();
	await expect(page.getByRole('banner')).toContainText('OSSMA');
});

test('abre rotas dinâmicas diretamente pelo fallback SPA', async ({ page }) => {
	const clientResponse = await page.goto('/clients/example-client');

	expect(clientResponse?.ok()).toBe(true);
	await expect(page.getByRole('heading', { name: 'Perfil do cliente' })).toBeVisible();

	const assessmentResponse = await page.goto('/assessments/example-assessment');

	expect(assessmentResponse?.ok()).toBe(true);
	await expect(page.getByRole('heading', { name: 'Avaliação' })).toBeVisible();
});
