<script lang="ts">
	import type { SVGAttributes } from "svelte/elements"

	interface Props extends SVGAttributes<SVGSVGElement> {}

	let { ...rest }: Props = $props()
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height={rest.height ?? "24px"}
	width={rest.width ?? "24px"}
	viewBox="0 -960 960 960"
	fill={rest.fill ?? "black"}
	{...rest}
>
	<path
		d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
	/>
</svg>
