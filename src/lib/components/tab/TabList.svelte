<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { activeLineAction } from "../../actions/index.js"
	import HoverFollower from "../hover-follower/index.js"
	import type { ActionType, OrientationType } from "../../types/index.js"
	import { mergeStyleUtil } from "../../utils/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		lineStyle?: boolean | { color?: string; height?: string }
		hoverFollower?: boolean | { bgColor?: string }
		orientation?: OrientationType
	}

	let {
		class: className,
		lineStyle,
		hoverFollower,
		orientation = "horizontal",
		children,
		...rest
	}: Props = $props()

	const lineColor =
		lineStyle && typeof lineStyle === "object"
			? (lineStyle.color ?? "var(--ff-color-on-surface)")
			: "var(--ff-color-on-surface)"

	const lineHeight =
		lineStyle && typeof lineStyle === "object"
			? (lineStyle.height ?? "2px")
			: "2px"

	const dataSet = {
		"data-line-color": lineColor,
		"data-line-height": lineHeight
	}

	const bgColor =
		hoverFollower && typeof hoverFollower === "object"
			? (hoverFollower.bgColor ?? undefined)
			: undefined

	const style = mergeStyleUtil(
		"display: flex;",
		orientation === "vertical" ? "flex-direction: column;" : "",
		orientation === "horizontal"
			? `border-bottom: 1px solid color-mix(in srgb, ${lineColor} 50%, gray 50%);`
			: "",
		rest.style
	)
</script>

<div {...rest}>
	{#if hoverFollower}
		<HoverFollower
			{...dataSet}
			{bgColor}
			class={className}
			{style}
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
