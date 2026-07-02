<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<nav aria-label="Navegação principal">
	<ul>
		<li><a href={resolve('/')}>Início</a></li>
		<li><a href={resolve('/clients')}>Clientes</a></li>
		<li><a href={resolve('/professionals')}>Profissionais</a></li>
		<li><a href={resolve('/assessments')}>Avaliações</a></li>
		<li><a href={resolve('/settings')}>Configurações</a></li>
	</ul>
</nav>

<style>
	nav {
		grid-row: 2;
		grid-column: 1;
		padding: 1rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media (max-width: 48rem) {
		nav {
			display: none;
		}
	}
</style>
