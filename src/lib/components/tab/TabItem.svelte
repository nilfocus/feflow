<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { activeLineAction } from "../../actions/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className, children, ...rest }: Props = $props()

	const color = "var(--ff-color-primary)"
</script>

<div
	{...rest}
	use:activeLineAction
	data-line-color={color}
	data-line-height="2px"
	style="display: flex; border-bottom: 1px solid {color}; {rest.style}"
>
	{@render children?.()}
</div>
