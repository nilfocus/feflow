<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { Snippet } from "svelte"
	import styles from "./Navbar.module.css"
	import type { HorizontalPositionType } from "../../types/index.js"
	import NavbarToggler from "./NavbarToggler.svelte"

	type PositionedChilds = Partial<{
		variant?: "full" | "collapse"
		align?: Exclude<HorizontalPositionType, "center">
		left: Snippet<[Snippet]>
		center: Snippet<[]>
		right: Snippet<[Snippet]>
	}>

	interface Props extends HTMLAttributes<HTMLDivElement>, PositionedChilds {}

	let {
		class: className = "",
		variant = "full",
		align = "right",
		left,
		center,
		right,
		children,
		...rest
	}: Props = $props()

	let isOpen = $state(false)
</script>

{#snippet toggler()}
	<NavbarToggler
		id={rest.id}
		class="md"
		{align}
		onchange={() => {
			console.log("opa")
			isOpen = !isOpen
		}}
	/>
{/snippet}

<div
	{...rest}
	id="navbar"
	data-toggle={variant}
	data-align={align}
	class={classMapUtil(className, [className, styles], styles.navbar, {
		[styles.show]: isOpen
	})}
>
	{@render children?.()}
	{#if children}
		{@render children?.()}
	{:else}
		<div class={styles.left}>
			{@render left?.(toggler)}
		</div>
		<div class={styles.center}>
			{@render center?.()}
		</div>
		<div class={styles.right}>
			{@render right?.(toggler)}
		</div>
	{/if}
</div>
