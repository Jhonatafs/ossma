<script>
	import { resolve } from '$app/paths';
</script>

<h1>Revisar avaliação</h1>

<ul>
	<li>
		<a href={resolve('/assessments/[assessmentId]', { assessmentId: 'example-assessment' })}>
			Voltar para avaliação
		</a>
	</li>
	<li>
		<a
			href={resolve('/assessments/[assessmentId]/report', {
				assessmentId: 'example-assessment'
			})}
		>
			Ver relatório
		</a>
	</li>
</ul>
