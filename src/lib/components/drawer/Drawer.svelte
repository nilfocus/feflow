<script lang="ts">
	import type { Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Drawer.module.css"
	import { clickOutsideAction, resizeAction } from "../../actions/index.js"
	import type { PositionTypeNoCenter } from "../../types/index.js"

	export interface Props extends HTMLAttributes<HTMLDivElement> {
		isOpen?: boolean
		variant?: "permanent" | "temporary"
		position?: PositionTypeNoCenter
		handleClose?: () => void
		header?: Snippet<[]>
		content: Snippet<[]>
	}

	let {
		class: className = "",
		isOpen = false,
		variant = "temporary",
		position = "left",
		handleClose,
		header,
		content,
		...rest
	}: Props = $props()

	const isAutoClose = variant === "temporary" && handleClose
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles.drawer]: true,
		[styles.show]: isOpen || variant === "permanent",
		[styles[position]]: true
	})}
	use:clickOutsideAction={{
		handler: () => {
			if (isAutoClose) handleClose()
		}
	}}
	use:resizeAction={{
		handler: () => {
			if (isAutoClose && window.innerWidth > 768) {
				handleClose()
			}
		}
	}}
	{...rest}
>
	{@render header?.()}
	<div class={styles.content}>
		{@render content()}
	</div>
</div>
