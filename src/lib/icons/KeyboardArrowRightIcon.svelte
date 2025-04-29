<script lang="ts">
	import type { SVGAttributes } from "svelte/elements"

	interface Props extends SVGAttributes<SVGSVGElement> {}

	let { ...rest }: Props = $props()
</script>

<svg
	{...rest}
	xmlns="http://www.w3.org/2000/svg"
	height={rest.width ?? "24px"}
	width={rest.width ?? "24px"}
	viewBox="0 -960 960 960"
	fill="var(--sc-color-text-muted)"
>
	<path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
</svg>
