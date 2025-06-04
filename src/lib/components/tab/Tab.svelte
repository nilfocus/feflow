<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import Card from "../card/Card.svelte"
	import type { OrientationType } from "../../types/index.js"
	import { mergeStyleUtil } from "../../utils/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		orientation?: OrientationType
	}

	let { class: className, orientation = "horizontal", children, ...rest }: Props = $props()

	const style = mergeStyleUtil(
		orientation === "vertical" ? "display: flex;" : "",
		rest.style
	)
</script>

<Card {...rest} class={className} {style}>
	{@render children?.()}
</Card>
