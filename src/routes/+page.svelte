<script>
	import { resolve } from '$app/paths';
</script>

<h1>Painel</h1>

<ul>
	<li><a href={resolve('/clients')}>Clientes</a></li>
	<li><a href={resolve('/professionals')}>Profissionais</a></li>
	<li><a href={resolve('/assessments')}>Avaliações</a></li>
	<li><a href={resolve('/settings')}>Configurações</a></li>
</ul>
