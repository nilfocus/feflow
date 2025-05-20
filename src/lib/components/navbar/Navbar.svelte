<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { Snippet } from "svelte"

	type PositionedChilds = Partial<{
		start: Snippet<[]>
		center: Snippet<[]>
		end: Snippet<[]>
	}>

	interface Props extends HTMLAttributes<HTMLDivElement>, PositionedChilds {}

	let {
		class: className = "",
		start,
		center,
		end,
		children,
		...rest
	}: Props = $props()
</script>

<div class={classMapUtil(className, "navbar")} {...rest}>
	{@render children?.()}
	{#if children}
		{@render children?.()}
	{:else}
		{@render start?.()}
		{@render center?.()}
		<div style="justify-self: flex-end;">
			{@render end?.()}
		</div>
	{/if}
</div>

<style>
	.navbar {
		padding: 0 2rem;
		position: relative;
		background: var(--ff-color-surface);
		color: var(--ff-color-on-surface);
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		align-items: center;
		gap: 1rem;
		height: 80px;
	}
</style>
