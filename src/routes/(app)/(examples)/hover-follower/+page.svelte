<script lang="ts">
	import { Card, HoverFollower, Link, useMediaQuery } from "@/lib/index.js"
	import { onDestroy } from "svelte"

	const isMd = $derived(useMediaQuery("max-width", "md"))

	onDestroy(() => {
		isMd.destroy()
	})
</script>

<h1>vertical</h1>
<HoverFollower bgColor="green">
	{#each ["item1", "item2", "item3"] as item, i}
		<div role="list" class="card">
			{item}
		</div>
	{/each}
</HoverFollower>

<br />
<h1>with multiple childs</h1>
<HoverFollower bgColor="red">
	<Link href="https://dxdns.dev" target="_blank">
		<Card>
			<div>
				<h4>test</h4>
				<p>test</p>
			</div>
		</Card>
	</Link>
	<Link href="https://dxdns.dev" target="_blank">
		<Card>
			<div>
				<h4>test</h4>
				<p>test</p>
			</div>
		</Card>
	</Link>
</HoverFollower>

<h1>{isMd.value}</h1>
<HoverFollower orientation={isMd.value ? "vertical" : "horizontal"}>
	{#each ["item1", "item2", "item3"] as item, i}
		<div role="list" class="card">
			{item}
		</div>
	{/each}
</HoverFollower>

<style>
	.card {
		padding: 16px;
		border-radius: 8px;
		cursor: pointer;
	}
</style>
