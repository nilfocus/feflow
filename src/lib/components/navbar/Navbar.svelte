<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { Snippet } from "svelte"
	import styles from "./Navbar.module.css"

	type PositionedChilds = Partial<{
		start: Snippet<[]>
		center: Snippet<[]>
		end: Snippet<[]>
	}>

	interface Props extends HTMLAttributes<HTMLDivElement>, PositionedChilds {}

	let {
		class: className = "",
		start,
		center,
		end,
		children,
		...rest
	}: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil(className, [className, styles], styles.navbar)}
>
	{@render children?.()}
	{#if children}
		{@render children?.()}
	{:else}
		<div class={styles.start}>
			{@render start?.()}
		</div>
		<div class={styles.center}>
			{@render center?.()}
		</div>
		<div class={styles.end}>
			{@render end?.()}
		</div>
	{/if}
</div>
