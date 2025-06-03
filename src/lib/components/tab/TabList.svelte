<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { activeLineAction } from "../../actions/index.js"
	import HoverFollower from "../hover-follower/index.js"
	import type { ActionType, OrientationType } from "../../types/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		hoverFollower?: boolean | { bgColor?: string }
		orientation?: OrientationType
	}

	let {
		class: className,
		hoverFollower,
		orientation = "horizontal",
		children,
		...rest
	}: Props = $props()

	const dataSet = {
		"data-line-color": "var(--ff-color-on-surface)",
		"data-line-height": "2px"
	}
	const borderStyle = "border-bottom: 1px solid var(--ff-color-border);"

	const style = `
	display: flex; 
	${orientation === "vertical" ? "flex-direction: column;" : ""}
	${orientation === "horizontal" ? borderStyle : ""}
	${rest.style ?? ""};`

	const bgColor =
		typeof hoverFollower === "object" ? hoverFollower?.bgColor : undefined
</script>

<div {...rest}>
	{#if hoverFollower}
		<HoverFollower
			{...dataSet}
			{bgColor}
			class={className}
			style="{style} {borderStyle}"
			{orientation}
			actions={[
				[
					activeLineAction as ActionType<HTMLElement>,
					{
						orientation,
						firstChildIndex: 1
					}
				]
			]}
		>
			{@render children?.()}
		</HoverFollower>
	{:else}
		<div use:activeLineAction={{ orientation }} {style} {...dataSet} {...rest}>
			{@render children?.()}
		</div>
	{/if}
</div>
