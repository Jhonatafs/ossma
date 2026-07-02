<script lang="ts">
	let { children } = $props();
</script>

<main>{@render children()}</main>

<style>
	main {
		grid-row: 2;
		grid-column: 2;
		min-width: 0;
		padding: 1rem;
	}

	@media (max-width: 48rem) {
		main {
			grid-row: 3;
			grid-column: 1;
		}
	}
</style>
