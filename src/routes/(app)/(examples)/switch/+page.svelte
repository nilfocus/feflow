<script lang="ts">
	import { Input, Switch } from "@/lib/index.js"
</script>

<div style="width: 500px; height: 300px; margin: 5rem auto;">
	<h1>switch</h1>
	<br />
	<Switch />
	<br />
	<Switch label="disabled" disabled />
	<br />
	<Switch label="checked" checked />
	<br />
	<Switch label="label1" />
	<br />
	<Switch>
		{#snippet label()}
			<span>label2</span>
		{/snippet}
	</Switch>
	<br />

	<h1>sizes</h1>
	<br />
	<Switch size="xs" label="xs" />
	<br />
	<Switch size="sm" label="sm" />
	<br />
	<Switch size="md" label="md" />
	<br />
	<Switch size="lg" label="lg" />
	<br />
	<Switch size="xl" label="xl" />

	<br />
	<br />

	<div style="display: flex; align-items: center; gap: 1rem;">
		<Input />
		<Switch label="with image" size="md" />
	</div>
</div>
