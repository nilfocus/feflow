<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Navbar.module.css"
	import type { Snippet } from "svelte"

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
	class={classMapUtil(className, [styles, className], styles.navbar)}
	{...rest}
>
	{@render children?.()}
	{#if children}
		{@render children?.()}
	{:else}
		{@render start?.()}
		{@render center?.()}
		{@render end?.()}
	{/if}
</div>
