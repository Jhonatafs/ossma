<script>
	import { resolve } from '$app/paths';
</script>

<h1>Configurações</h1>

<ul>
	<li><a href={resolve('/settings/storage')}>Armazenamento local</a></li>
	<li><a href={resolve('/settings/backup')}>Backup</a></li>
	<li><a href={resolve('/settings/about')}>Sobre</a></li>
</ul>
