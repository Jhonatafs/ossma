<script>
	import { resolve } from '$app/paths';
</script>

<h1>Nova avaliação do cliente</h1>

<ul>
	<li>
		<a href={resolve('/clients/[clientId]', { clientId: 'example-client' })}>
			Voltar para perfil do cliente
		</a>
	</li>
	<li>
		<a href={resolve('/assessments/[assessmentId]', { assessmentId: 'example-assessment' })}>
			Ir para avaliação de exemplo
		</a>
	</li>
</ul>
