<script lang="ts">
	import { fade, fly } from "svelte/transition"
	import type { TransitionEntry } from "../../types/index.js"
	import { transitionUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"
	import { mergeStyleUtil } from "../../utils/index.js"

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

	const style = mergeStyleUtil("padding: 1rem;", rest.style)
</script>

{#if isActive}
	<div
		{...rest}
		class={className}
		{style}
		use:transitionUtil={transition ?? {
			in: [fly, { x: 300, duration: 400 }],
			out: [fade, { duration: 300 }]
		}}
	>
		{@render children?.()}
	</div>
{/if}
