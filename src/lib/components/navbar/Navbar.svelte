<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Navbar.module.css"
	import { fadeOnScrollAction } from "../../actions/index.js"

	type PositionedChilds = Partial<{
		isTranslucent?: boolean
		fadeOnScroll: boolean
	}>

	interface Props extends HTMLAttributes<HTMLDivElement>, PositionedChilds {}

	let {
		class: className = "",
		isTranslucent = false,
		fadeOnScroll = false,
		children,
		...rest
	}: Props = $props()

	let isOpen = $state(false)
</script>

<div
	{...rest}
	id="navbar"
	data-fade-on-scroll={fadeOnScroll}
	class={classMapUtil(className, [className, styles], styles.navbar, {
		[styles.isTranslucent]: isTranslucent,
		[styles.show]: isOpen
	})}
	use:fadeOnScrollAction
>
	{@render children?.()}
</div>
