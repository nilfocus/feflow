<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div {...rest} class={classMapUtil(className, "content")}>
	{@render children?.()}
</div>

<style>
	.content {
		padding: 0 0 0.5rem 3px;
		max-height: 80vh;
		overflow: auto;
		box-sizing: border-box;
	}
</style>
