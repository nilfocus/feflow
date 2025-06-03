<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { activeLineAction } from "../../actions/index.js"
	import HoverFollower from "../hover-follower/index.js"
	import type { ActionType } from "../../types/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		hoverFollower?: boolean
	}

	let {
		class: className,
		hoverFollower = false,
		children,
		...rest
	}: Props = $props()

	const dataSet = {
		"data-line-color": "var(--ff-color-on-surface)",
		"data-line-height": "2px"
	}
	const style = `display: flex; border-bottom: 1px solid var(--ff-color-border); ${rest.style}`
</script>

<div {...rest}>
	{#if hoverFollower}
		<HoverFollower
			{style}
			orientation="horizontal"
			{...dataSet}
			actions={[
				[
					activeLineAction as ActionType<HTMLElement>,
					{
						firstChildIndex: 1
					}
				]
			]}
		>
			{@render children?.()}
		</HoverFollower>
	{:else}
		<div use:activeLineAction {style} {...dataSet}>
			{@render children?.()}
		</div>
	{/if}
</div>
