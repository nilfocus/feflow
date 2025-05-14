<script lang="ts">
	import { Switch } from "@/lib/index.js"
</script>

<h1>switch</h1>
<br />

<Switch disabled />
<Switch checked />
<Switch label="label1" />
<Switch>
	{#snippet label()}
		<span>label2</span>
	{/snippet}
</Switch>
<br />

<h1>sizes</h1>
<Switch size="xs" />
<Switch size="sm" />
<Switch size="md" />
<Switch size="lg" />
<Switch size="xl" />
