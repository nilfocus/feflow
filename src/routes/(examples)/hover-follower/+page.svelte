<script lang="ts">
	import { Card, HoverFollower } from "@/lib/index.js"
</script>

<h1>vertical</h1>
<HoverFollower>
	{#each ["item1", "item2", "item3"] as item, i}
		<div role="list" class="card">
			{item}
		</div>
	{/each}
</HoverFollower>

<br />
<h1>horizontal</h1>
<HoverFollower orientation="horizontal">
	<div style="display: flex;">
		{#each ["item1", "item2", "item3"] as item, i}
			<div role="list" class="card">
				{item}
			</div>
		{/each}
	</div>
</HoverFollower>

<br />
<h1>with multiple childs</h1>
<HoverFollower orientation="horizontal">
	<Card>
		<div>
			<h4>test</h4>
			<p>test</p>
		</div>
	</Card>
	<Card>
		<div>
			<h4>test</h4>
			<p>test</p>
		</div>
	</Card>
</HoverFollower>

<style>
	.card {
		padding: 16px;
		border-radius: 8px;
		cursor: pointer;
	}
</style>
