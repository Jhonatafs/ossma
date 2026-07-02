<script>
	import { resolve } from '$app/paths';
</script>

<h1>Perfil do cliente</h1>

<ul>
	<li>
		<a href={resolve('/clients/[clientId]/edit', { clientId: 'example-client' })}>
			Editar cliente
		</a>
	</li>
	<li>
		<a href={resolve('/clients/[clientId]/assessments/new', { clientId: 'example-client' })}>
			Nova avaliação
		</a>
	</li>
	<li><a href={resolve('/clients')}>Voltar para clientes</a></li>
</ul>
