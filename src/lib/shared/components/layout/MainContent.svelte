<script lang="ts">
	let { children } = $props();
</script>

<main class="app-main main-content page-scroll">
	<div class="page-content page-container stack stack-lg">
		{@render children()}
	</div>
</main>
