<script lang="ts">
	import type { SVGAttributes } from "svelte/elements"

	interface Props extends SVGAttributes<SVGSVGElement> {}

	let { class: className, ...rest }: Props = $props()
</script>

<svg
	{...rest}
	class={className}
	xmlns="http://www.w3.org/2000/svg"
	height={rest.height ?? "24px"}
	width={rest.width ?? "24px"}
	viewBox="0 -960 960 960"
	fill={rest.fill ?? "black"}
>
	<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
</svg>
