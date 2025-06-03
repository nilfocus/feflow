<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import { activeLineAction } from "../../actions/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className, children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	use:activeLineAction
	data-line-color="#ff5722"
	data-line-height="2px"
	style="display: flex; border-bottom: 1px solid #ff5722;"
>
	{@render children?.()}
</div>
