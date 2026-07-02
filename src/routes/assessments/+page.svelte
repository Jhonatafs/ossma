<script>
	import { resolve } from '$app/paths';
</script>

<h1>Avaliações</h1>

<ul>
	<li>
		<a href={resolve('/assessments/[assessmentId]', { assessmentId: 'example-assessment' })}>
			Avaliação de exemplo
		</a>
	</li>
	<li>
		<a
			href={resolve('/assessments/[assessmentId]/report', {
				assessmentId: 'example-assessment'
			})}
		>
			Relatório da avaliação de exemplo
		</a>
	</li>
</ul>
