<script>
	import { resolve } from '$app/paths';
</script>

<h1>Relatório da avaliação</h1>

<ul>
	<li>
		<a href={resolve('/assessments/[assessmentId]', { assessmentId: 'example-assessment' })}>
			Voltar para avaliação
		</a>
	</li>
	<li><a href={resolve('/assessments')}>Voltar para avaliações</a></li>
</ul>
