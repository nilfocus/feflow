<script lang="ts">
	import type { Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Drawer.module.css"
	import { clickOutsideAction } from "../../actions/index.js"
	import type { PositionTypeNoCenter } from "../../types/index.js"

	export interface Props extends HTMLAttributes<HTMLDivElement> {
		isOpen?: boolean
		variant?: "temporary" | "permanent"
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
</script>

<div
	class={classMapUtil(
		className,
		[styles, className],
		styles.drawer,
		styles[position],
		{
			[styles.show]: variant === "permanent" ? true : isOpen
		}
	)}
	use:clickOutsideAction={{
		isOpen: variant === "permanent" ? false : isOpen,
		handler: () => {
			handleClose?.()
		}
	}}
	{...rest}
>
	{@render header?.()}
	<div class={styles.content}>
		{@render content()}
	</div>
</div>
