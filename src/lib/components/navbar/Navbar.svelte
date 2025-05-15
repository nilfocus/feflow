<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div class={classMapUtil(className, "navbar")} {...rest}>
	{@render children?.()}
</div>

<style>
	.navbar {
		background: var(--feflow-color-surface);
		color: var(--feflow-color-on-surface);
		height: 80px;
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem 0 2rem;
		position: relative;
		width: 100%;
	}
</style>
