<script>
	import { resolve } from '$app/paths';
</script>

<h1>Avaliação</h1>

<ul>
	<li>
		<a
			href={resolve('/assessments/[assessmentId]/edit', {
				assessmentId: 'example-assessment'
			})}
		>
			Editar avaliação
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
	<li>
		<a
			href={resolve('/assessments/[assessmentId]/report', {
				assessmentId: 'example-assessment'
			})}
		>
			Relatório da avaliação
		</a>
	</li>
	<li><a href={resolve('/assessments')}>Voltar para avaliações</a></li>
</ul>
