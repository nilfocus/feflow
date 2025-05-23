<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { Snippet } from "svelte"
	import styles from "./Navbar.module.css"
	import type { HorizontalPositionType } from "../../types/index.js"
	import NavbarToggler from "./NavbarToggler.svelte"
	import fadeOnScrollAction from "@/lib/actions/fadeOnScrollAction.js"

	type PositionedChilds = Partial<{
		isTranslucent?: boolean
		fadeOnScroll: boolean
		variant?: "full" | "collapse"
		align?: Exclude<HorizontalPositionType, "center">
		left: Snippet<[Snippet]>
		center: Snippet<[]>
		right: Snippet<[Snippet]>
	}>

	interface Props extends HTMLAttributes<HTMLDivElement>, PositionedChilds {}

	let {
		class: className = "",
		isTranslucent = false,
		fadeOnScroll = false,
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
			isOpen = !isOpen
		}}
	/>
{/snippet}

<div
	{...rest}
	id="navbar"
	data-toggle={variant}
	data-align={align}
	data-fade-on-scroll={fadeOnScroll}
	class={classMapUtil(className, [className, styles], styles.navbar, {
		[styles.isTranslucent]: isTranslucent,
		[styles.show]: isOpen
	})}
	use:fadeOnScrollAction
>
	{#if children}
		{@render children?.()}
	{:else}
		<div class={styles.grid}>
			<div class={styles.left}>
				{@render left?.(toggler)}
			</div>
			<div class={styles.center}>
				{@render center?.()}
			</div>
			<div class={styles.right}>
				{@render right?.(toggler)}
			</div>
		</div>
	{/if}
</div>
