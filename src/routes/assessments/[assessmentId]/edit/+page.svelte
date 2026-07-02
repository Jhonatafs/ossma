<script>
	import { resolve } from '$app/paths';
</script>

<h1>Editar avaliação</h1>

<ul>
	<li>
		<a href={resolve('/assessments/[assessmentId]', { assessmentId: 'example-assessment' })}>
			Voltar para avaliação
		</a>
	</li>
	<li>
		<a
			href={resolve('/assessments/[assessmentId]/review', {
				assessmentId: 'example-assessment'
			})}
		>
			Revisar avaliação
		</a>
	</li>
</ul>
