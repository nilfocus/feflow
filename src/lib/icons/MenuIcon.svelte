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
	<path
		d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
	/>
</svg>
