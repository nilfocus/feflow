<script lang="ts">
	import type { Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Drawer.module.css"
	import { clickOutsideAction } from "../../actions/index.js"
	import type { PositionTypeNoCenter } from "../../types/index.js"

	export interface Props extends HTMLAttributes<HTMLDivElement> {
		isOpen?: boolean
		position?: PositionTypeNoCenter
		handleClose?: () => void
		header?: Snippet<[]>
		content: Snippet<[]>
	}

	let {
		class: className = "",
		isOpen = false,
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
			[styles.show]: isOpen
		}
	)}
	use:clickOutsideAction={{
		isOpen,
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
