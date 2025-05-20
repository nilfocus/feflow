<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./ProgressCircle.module.css"
	import { classMapUtil } from "../../utils/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		value: number
		color?: string
	}

	let {
		class: className = "",
		value,
		color = "var(--ff-color-primary)",
		children,
		...rest
	}: Props = $props()

	let strokeDasharray = $state("0")
	let el: SVGSVGElement

	$effect(() => {
		const roundCircum = 2 * 36 * Math.PI
		const roundDraw = (value * roundCircum) / 100
		strokeDasharray = `${roundDraw} 999`
	})
</script>

<div
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		[styles.progressCircle]: true
	})}
>
	<svg
		bind:this={el}
		stroke-dasharray={strokeDasharray}
		data-percent={value}
		width="92"
		height="92"
		viewBox="-11.5 -11.5 115 115"
	>
		<circle
			r="36"
			cx="46"
			cy="46"
			fill="transparent"
			stroke="#e0e0e0"
			stroke-dasharray={"0"}
		>
		</circle>
		<circle
			r="36"
			cx="46"
			cy="46"
			stroke={color}
			stroke-width={"10px"}
			fill="transparent"
		>
		</circle>
		{@render children?.()}
	</svg>
</div>
