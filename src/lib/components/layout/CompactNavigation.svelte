<script lang="ts">
	import { resolve } from '$app/paths';

	let isOpen = $state(false);
</script>

<nav aria-label="Navegação compacta">
	<button
		type="button"
		aria-controls="compact-navigation-links"
		aria-expanded={isOpen}
		onclick={() => (isOpen = !isOpen)}
	>
		{isOpen ? 'Fechar menu' : 'Abrir menu'}
	</button>

	{#if isOpen}
		<ul id="compact-navigation-links">
			<li><a href={resolve('/')} onclick={() => (isOpen = false)}>Início</a></li>
			<li><a href={resolve('/clients')} onclick={() => (isOpen = false)}>Clientes</a></li>
			<li>
				<a href={resolve('/professionals')} onclick={() => (isOpen = false)}>Profissionais</a>
			</li>
			<li><a href={resolve('/assessments')} onclick={() => (isOpen = false)}>Avaliações</a></li>
			<li><a href={resolve('/settings')} onclick={() => (isOpen = false)}>Configurações</a></li>
		</ul>
	{/if}
</nav>

<style>
	nav {
		display: none;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin: 1rem 0 0;
		padding: 0;
		list-style: none;
	}

	@media (max-width: 48rem) {
		nav {
			display: block;
			grid-row: 2;
			grid-column: 1;
			padding: 1rem;
		}
	}
</style>
