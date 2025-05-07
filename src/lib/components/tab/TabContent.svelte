<script lang="ts">
	import type { TransitionEntry } from "../../types/index.js"
	import { classMapUtil, transitionUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	export interface Props extends HTMLAttributes<HTMLDivElement> {
		isActive: boolean
		transition?: TransitionEntry
	}

	let {
		class: className,
		isActive,
		transition,
		children,
		...rest
	}: Props = $props()
</script>

{#if isActive}
	<div
		class={classMapUtil({
			[className as string]: true,
			["tabContent"]: true
		})}
		use:transitionUtil={transition}
		{...rest}
	>
		{@render children?.()}
	</div>
{/if}

<style>
	.tabContent {
		padding: 1rem;
		background: var(--sc-color-surface);
		color: var(--sc-color-on-surface);
	}
</style>
