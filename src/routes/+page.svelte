<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>OSSMA</h1>

<p>Open Source Sport Management Application.</p>

<section aria-labelledby="main-areas-heading">
	<h2 id="main-areas-heading">Main areas</h2>

	<ul>
		<li><a href={resolve('/onboarding')}>Review onboarding</a></li>
		<li><a href={resolve('/clients')}>Manage clients</a></li>
		<li><a href={resolve('/professionals')}>Manage professional profiles</a></li>
		<li><a href={resolve('/institutions')}>Manage institution profiles</a></li>
		<li><a href={resolve('/evaluations')}>Manage evaluations</a></li>
		<li><a href={resolve('/backup')}>Manual backup</a></li>
		<li><a href={resolve('/settings')}>Settings</a></li>
		<li><a href={resolve('/help')}>Help</a></li>
		<li><a href={resolve('/documentation')}>Technical documentation</a></li>
	</ul>
</section>
