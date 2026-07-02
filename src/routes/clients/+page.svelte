<script>
	import { resolve } from '$app/paths';
</script>

<h1>Clientes</h1>

<ul>
	<li><a href={resolve('/clients/new')}>Novo cliente</a></li>
	<li>
		<a href={resolve('/clients/[clientId]', { clientId: 'example-client' })}>
			Exemplo de perfil de cliente
		</a>
	</li>
</ul>
