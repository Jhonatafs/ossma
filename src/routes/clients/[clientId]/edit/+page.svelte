<script>
	import { resolve } from '$app/paths';
</script>

<h1>Editar cliente</h1>

<ul>
	<li>
		<a href={resolve('/clients/[clientId]', { clientId: 'example-client' })}>
			Voltar para perfil do cliente
		</a>
	</li>
	<li><a href={resolve('/clients')}>Voltar para clientes</a></li>
</ul>
