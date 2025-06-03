<script lang="ts">
	import type { TransitionEntry } from "../../types/index.js"
	import { classMapUtil, transitionUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	export interface TabContentProps {
		isActive: boolean
		transition?: TransitionEntry
	}

	interface Props extends TabContentProps, HTMLAttributes<HTMLDivElement> {}

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
		{...rest}
		class={classMapUtil(className, "tabContent")}
		use:transitionUtil={transition}
	>
		{@render children?.()}
	</div>
{/if}

<style>
	.tabContent {
		padding: 1rem;
		background: var(--ff-color-surface);
		color: var(--ff-color-on-surface);
	}
</style>
