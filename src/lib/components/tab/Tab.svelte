<script lang="ts">
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className, children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		["tab"]: true
	})}
>
	{@render children?.()}
</div>

<style>
	.tab {
		position: relative;
		border-radius: 5px;
		overflow: hidden;
		background: var(--sc-color-surface);
	}
</style>
