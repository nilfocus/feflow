<script lang="ts">
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		isActive: boolean
	}

	let { class: className, isActive, children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil({
		["tabContent"]: true,
		["active"]: isActive
	})}
>
	{@render children?.()}
</div>

<style>
	.tabContent {
		display: none;
		padding: 1rem;
		background: var(--sc-color-surface);
		color: var(--sc-color-on-surface);
	}

	.tabContent.active {
		display: block;
	}
</style>
