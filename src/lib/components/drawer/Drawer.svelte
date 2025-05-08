<script lang="ts">
	import type { Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Drawer.module.css"
	import { clickOutsideAction, resizeAction } from "../../actions/index.js"

	export interface Props extends HTMLAttributes<HTMLDivElement> {
		isOpen: boolean
		autoClose?: boolean
		position?: "left" | "right"
		handleClose: () => void
		header: Snippet
		content: Snippet
	}

	let {
		class: className = "",
		isOpen,
		autoClose = false,
		position = "left",
		handleClose,
		header,
		content,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles.drawer]: true,
		[styles.show]: isOpen,
		[styles[position]]: true
	})}
	use:clickOutsideAction={{
		handler: () => {
			if (autoClose) handleClose()
		}
	}}
	use:resizeAction={{
		handler: () => {
			if (autoClose && window.innerWidth > 768) {
				handleClose()
			}
		}
	}}
	{...rest}
>
	{@render header()}
	<div class={styles.content}>
		{@render content()}
	</div>
</div>
