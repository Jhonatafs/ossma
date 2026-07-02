<script>
	import { resolve } from '$app/paths';
</script>

<h1>Profissionais</h1>

<ul>
	<li><a href={resolve('/professionals/new')}>Novo profissional</a></li>
	<li>
		<a
			href={resolve('/professionals/[professionalId]/edit', {
				professionalId: 'example-professional'
			})}
		>
			Editar profissional de exemplo
		</a>
	</li>
</ul>
