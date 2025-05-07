<script lang="ts">
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	export interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className, children, ...rest }: Props = $props()
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		["tab"]: true
	})}
	{...rest}
>
	{@render children?.()}
</div>

<style>
	.tab {
		position: relative;
		border-radius: 5px;
		overflow: hidden;
		background: var(--feflow-color-surface);
	}
</style>
