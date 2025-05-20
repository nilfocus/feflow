<script lang="ts">
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className, children, ...rest }: Props = $props()
</script>

<div class={classMapUtil(className, "tab")} {...rest}>
	{@render children?.()}
</div>

<style>
	.tab {
		position: relative;
		border-radius: 0.25rem;
		overflow: hidden;
		background: var(--ff-color-surface);
	}
</style>
